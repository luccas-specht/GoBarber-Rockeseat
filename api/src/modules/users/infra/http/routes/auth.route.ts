import { Router } from 'express';
import { AuthenticationService } from '@modules/users/services/authenticationUserServer';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

const authRouter = Router();

authRouter.post('/', async (request, response) => {

  const { email, password } = request.body;
  
  const usersRepository = new UsersRepository();
  const authenticationService = new AuthenticationService(usersRepository);

  const { user, token } = await authenticationService.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export { authRouter };
