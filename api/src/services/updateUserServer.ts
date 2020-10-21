import { getRepository } from 'typeorm';

import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import { Users } from '../models/users';
import { AppError } from '../errors/appError';

interface Request {
    user_id: string,
    avatarFileName: string
}

class UpdateUserAvatarService {

    public async execute({ user_id, avatarFileName }: Request): Promise<Users> {
        const usersRepository = getRepository(Users)
        const user = await usersRepository.findOne(user_id)

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

        await usersRepository.save(user)

        return user;
    }
}

export { UpdateUserAvatarService }