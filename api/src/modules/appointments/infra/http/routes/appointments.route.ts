import { Router } from 'express';
import { parseISO } from 'date-fns';

import { AppointmentRepository } from '@modules/appointments/infra/typeorm/repositories/appointment';
import { CreateAppointmentService } from '@modules/appointments/service/createAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {

//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', async (request, response) => { 

  const { provider_id, date } = request.body;
  const parsedDate = parseISO(date);
  
  const appointmentsRepository = new AppointmentRepository();
  const createAppointmentService = new CreateAppointmentService(appointmentsRepository);

  const appointment = await createAppointmentService.execute({ provider_id, date: parsedDate });

  return response.json(appointment);

});

export { appointmentsRouter };
