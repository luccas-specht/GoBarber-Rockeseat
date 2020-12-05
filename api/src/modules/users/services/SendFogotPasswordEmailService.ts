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
    private mailProvier: IMailProvider,

    @inject('UsersTokenRepository')
    private usersTokenRepository: IUsersTokenRepository
) {}
  
  public async execute({ email }: Request): Promise<void> {
      const user = await this.usersRepository.findByEmail(email);
      
      if(!user) throw new AppError('e-mail não cadastrado.', 400);

      await this.usersTokenRepository.generate(user.id);

      this.mailProvier.sendMail(email, 'recupera ai cpx')
  };

};

export { SendForgotPasswordEmailService };
