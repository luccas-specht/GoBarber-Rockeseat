import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { CreateUserService } from '../services/createUsersService';
import { UpdateUserAvatarService } from '../services/updateUserServer';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.post('/', async (request, response) => {

  const { name, email, password } = request.body;

  const createUser = new CreateUserService();
  const user = await createUser.execute({ name, email, password });

  return response.json(user);

});

userRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'),
  async (request, response) => {

    const updateUserServer = new UpdateUserAvatarService();

    const user = await updateUserServer.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename
    })

    return response.json(user)

  }
);
export { userRouter };
