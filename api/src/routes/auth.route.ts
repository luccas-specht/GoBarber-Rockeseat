import { Router } from 'express';
import { AuthenticationService } from '../services/authenticationUserServer';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticationService = new AuthenticationService();

    const { newUser, token } = await authenticationService.execute({
      email,
      password,
    });

    return response.json({ newUser, token });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export { authRouter };
