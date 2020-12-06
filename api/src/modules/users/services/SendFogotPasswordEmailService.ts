import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/appError';
import { IMailProvider } from '@shared/container/providers/MailProvider/models/IMailProvider';

import { IUsersRepository } from '../repositories/IUsersRepository';
import { IUsersTokenRepository } from '../repositories/IUserTokens';

interface Request {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(    
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UsersTokenRepository')
    private usersTokenRepository: IUsersTokenRepository
) {}
  
  public async execute({ email }: Request): Promise<void> {
      const user = await this.usersRepository.findByEmail(email);
      
      if(!user) throw new AppError('e-mail não cadastrado.', 400);

     const { token } = await this.usersTokenRepository.generate(user.id);

     await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[GoBarber] Recuperação de senha',
      // templateData: {
      //   file: forgotPasswordTemplate,
      //   variables: {
      //     name: user.name,
      //     link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`,
      //   },
      // },
      templateData: {
        template: 'Olá, {{name}}: {{token}}',
          variables: {
          name: user.name,
          token
        },
      },
    });
  }
}

export { SendForgotPasswordEmailService };
