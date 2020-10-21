import { Router } from 'express';
import { AuthenticationService } from '../services/authenticationUserServer';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticationService = new AuthenticationService();

    const { user, token } = await authenticationService.execute({
      email,
      password,
    });

    return response.json({ user, token });
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message });
  }
});

export { authRouter };
