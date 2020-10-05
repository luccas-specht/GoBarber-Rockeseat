import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  provider_id: string;

  @Column('timestamp with time zone')
  date: Date;
}

export { Appointment };
