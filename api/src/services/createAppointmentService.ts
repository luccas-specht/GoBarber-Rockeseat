import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';
import { Appointment } from '../models/appointment';
import { AppointmentRepository } from '../repositories/appointment';
interface PropsCreateAppointment {
  date: Date;
  provider: string;
}
class CreateAppointmentService {
  public async execute({
    date,
    provider,
  }: PropsCreateAppointment): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentInSame = await appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSame) throw Error('horário está ocupado');

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);
    return appointment;
  }
}
export { CreateAppointmentService };