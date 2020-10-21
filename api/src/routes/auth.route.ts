import { Router } from 'express';
import { AuthenticationService } from '../services/authenticationUserServer';

const authRouter = Router();

authRouter.post('/', async (request, response) => {

  const { email, password } = request.body;

  const authenticationService = new AuthenticationService();

  const { user, token } = await authenticationService.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export { authRouter };
