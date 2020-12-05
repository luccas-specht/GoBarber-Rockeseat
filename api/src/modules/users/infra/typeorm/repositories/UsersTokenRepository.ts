import { getRepository, Repository } from 'typeorm';

import { UsersToken } from '../entities/UserToken';

import { IUsersTokenRepository } from '@modules/users/repositories/IUserTokens';

class UsersTokenRepository implements IUsersTokenRepository {
  private ormRepository: Repository<UsersToken>

  constructor (){
   this.ormRepository = getRepository(UsersToken);
  }
  
  public async generate(user_id: string): Promise<UsersToken> {

  }

 

};

export { UsersTokenRepository };
