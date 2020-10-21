import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Users } from '../models/users';

import authConfig from '../config/auth';
import { AppError } from '../errors/appError';
interface PropsAuthenticationService {
  email: string;
  password: string;
}
interface AuthReponse {
  // user: Omit<Users, 'password'>;
  user: Users;
  token: string;
}
class AuthenticationService {
  async execute({ email, password }: PropsAuthenticationService): Promise<AuthReponse> {
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) throw new AppError('Email ou senha incorreto', 401);

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) throw new AppError('Email ou senha incorreto', 401);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticationService };
