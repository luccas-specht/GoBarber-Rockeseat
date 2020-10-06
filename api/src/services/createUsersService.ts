import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { Users } from '../models/users';

interface PropsCreateUserService {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({
    email,
    name,
    password,
  }: PropsCreateUserService): Promise<Users> {
    const usersRepository = getRepository(Users);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) throw new Error('Email já cadastrado.');

    const hasedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hasedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
