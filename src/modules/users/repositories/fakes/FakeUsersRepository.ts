import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IcreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import { uuid } from 'uuidv4';
import AppError from '@shared/errors/AppError';
import User from '../../infra/typeorm/entities/User';
import IFindAllProvidersDTO from '../../dtos/IFindAllProvidersDTO';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(userData: IcreateUserDTO): Promise<User> {
    const user = new User();

    const findUser = this.users.find(find => find.email === userData.email);

    if (findUser) {
      throw new AppError('User e-mail already exists');
    }

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    const findUsers = this.users.filter(user => user.id !== except_user_id);

    return findUsers;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(finduser => finduser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
