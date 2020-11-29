import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CreateUserService } from '@modules/users/services/createUsersService';
import { UpdateUserAvatarService } from '@modules/users/services/updateUserServer';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

const userRouter = Router();
const upload = multer(uploadConfig);


userRouter.post('/', async (request, response) => {

  const { name, email, password } = request.body;

  const usersRepository = new UsersRepository();
  const createUser = new CreateUserService(usersRepository);
  const user = await createUser.execute({ name, email, password });

  return response.json(user);

});

userRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'),
  async (request, response) => {

    const usersRepository = new UsersRepository();
    const updateUserServer = new UpdateUserAvatarService(usersRepository);

    const user = await updateUserServer.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename
    })

    return response.json(user)

  }
);
export { userRouter };
