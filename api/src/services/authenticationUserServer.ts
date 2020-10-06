import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Users } from '../models/users';

interface PropsAuthenticationService {
  email: string;
  password: string;
}

interface AuthReponse {
  newUser: Omit<Users, 'password'>;
  token: string;
}

class AuthenticationService {
  async execute({
    email,
    password,
  }: PropsAuthenticationService): Promise<AuthReponse> {
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) throw Error('Email ou senha incorreto');

    const newUser = { id: user.id, name: user.name, email: user.email };
    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) throw Error('Email ou senha incorreto');

    const token = sign({}, 'iqjw82jund93h9n9qsh1aisjiajs20-2njnsdn27', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      newUser,
      token,
    };
  }
}

export { AuthenticationService };
