import { Router } from 'express';

import { appointmentsRouter } from './appointments.route';
import { userRouter } from './users.route';
import { authRouter } from './auth.route';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', userRouter);
routes.use('/auth', authRouter);

export { routes };
