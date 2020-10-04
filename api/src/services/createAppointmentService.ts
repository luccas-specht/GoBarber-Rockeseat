import { Appointment } from '../models/appointment';
import { AppointmentRepository } from '../repositories/appointment';
import { startOfHour } from 'date-fns';

interface PropsCreateAppointment {
  date: Date;
  provider: string;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentRepository;

  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: PropsCreateAppointment): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSame = this.appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSame) throw Error('horário está ocupado');

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}
export { CreateAppointmentService };
