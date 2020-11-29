
import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';

import uploadConfig from '@config/upload';
import { Users } from '../infra/typeorm/entities/users';
import { AppError } from '@shared/errors/appError';

import { IUsersRepository } from '../repositories/IUsersRepository';
interface Request {
    user_id: string,
    avatarFileName: string
}
@injectable()
class UpdateUserAvatarService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
        ) {}

    public async execute({ user_id, avatarFileName }: Request): Promise<Users> {
       
        const user = await this.usersRepository.findById(user_id)

        if (!user) {
            throw new AppError('usuario não autenticado', 401)
        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath)
            }
        }

        user.avatar = avatarFileName

        return await this.usersRepository.save(user);
    }
}

export { UpdateUserAvatarService }