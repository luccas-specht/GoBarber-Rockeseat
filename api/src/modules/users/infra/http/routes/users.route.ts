import { Router } from 'express';
import multer from 'multer';
import { container } from 'tsyringe';

import uploadConfig from '@config/upload';

import { CreateUserService } from '@modules/users/services/createUsersService';
import { UpdateUserAvatarService } from '@modules/users/services/updateUserServer';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';


const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.post('/', async (request, response) => {

  const { name, email, password } = request.body;

  const createUser = container.resolve(CreateUserService);
  const user = await createUser.execute({ name, email, password });

  return response.json(user);

});

userRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'),
  async (request, response) => {

    const updateUserServer = container.resolve(UpdateUserAvatarService);

    const user = await updateUserServer.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename
    })

    return response.json(user)

  });

export { userRouter };
