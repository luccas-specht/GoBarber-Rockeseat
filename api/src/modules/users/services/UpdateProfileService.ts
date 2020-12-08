import { injectable, inject } from 'tsyringe';
import { compare, hash } from 'bcryptjs';

import { Users } from '../infra/typeorm/entities/users';
import { AppError } from '@shared/errors/appError';

import { IUsersRepository } from '../repositories/IUsersRepository';

interface Request {
    userId: string,
    name: string,
    oldPassword?: string,
    password?: string
}

@injectable()
class UpdateProfileService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        ) {}

    public async execute({ userId, name, oldPassword, password }: Request): Promise<Users> {
       
        const user = await this.usersRepository.findById(userId);

        if(!user) throw new AppError('Usuário não encontrado.', 400);

        user.name = name;

        if(password && !oldPassword) throw new AppError('Senha antiga deve ser informada informada.', 400);

        if(password && oldPassword){
            const checkOldPassword = await compare(oldPassword, password);

            if(!checkOldPassword) throw new AppError('Senha antiga deve ser diferente da senha atual.', 400);

            const hasedPassword = await hash(password, 8);
            user.password = hasedPassword;
        }

        return await this.usersRepository.save(user);
    };
};

export { UpdateProfileService };