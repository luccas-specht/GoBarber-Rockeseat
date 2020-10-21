import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import { Appointment } from '../models/appointment';
import { AppointmentRepository } from '../repositories/appointment';
import { AppError } from '../errors/appError';
interface PropsCreateAppointment {
  date: Date;
  provider_id: string;
}
class CreateAppointmentService {

  public async execute({ date, provider_id }: PropsCreateAppointment): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentInSame = await appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSame) throw new AppError('horário está ocupado');

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);
    return appointment;
  }
}
export { CreateAppointmentService };
