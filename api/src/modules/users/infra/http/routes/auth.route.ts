import { Router } from 'express';
import { container } from 'tsyringe';

import { AuthenticationService } from '@modules/users/services/authenticationUserServer';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  
  const authenticationService = container.resolve(AuthenticationService);

  const { user, token } = await authenticationService.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export { authRouter };
