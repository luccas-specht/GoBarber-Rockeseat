import { startOfHour } from 'date-fns';

import { Appointment } from '../infra/typeorm/entities/appointment';

import { IAppointmentsRepository } from '../repositories/IAppointmentsRepository'

import { AppError } from '@shared/errors/appError';

interface Request {
  provider_id: string;
  date: Date; 
}

class CreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  public async execute({ date, provider_id }: Request): Promise<Appointment> {
   
    const appointmentDate = startOfHour(date);

    const findAppointmentInSame = await this.appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSame) throw new AppError('horário está ocupado');

    return await this.appointmentsRepository.createAndSave(provider_id, appointmentDate);
    
  }
}

export { CreateAppointmentService };
