import { UsersToken } from '../infra/typeorm/entities/UserToken'

interface IUsersTokenRepository {
    generate(user_id: string): Promise<UsersToken>;
};

export { IUsersTokenRepository };