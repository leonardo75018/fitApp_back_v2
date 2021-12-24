import { ICreateUser } from '@modules/users/domain/model/ICreateUser';
import { IUserRepository } from '@modules/users/domain/repositories/IUserRepository';
import { v4 as uuidv4 } from 'uuid';
import User from '../../entities/User';

class FakeUsersRepository implements IUserRepository {
  private users: User[] = [];

  public async create({
    firstName,
    lastName,
    email,
    password,
    role,
  }: ICreateUser): Promise<User> {
    const user = new User();

    user.id = uuidv4();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.role = role;

    this.users.push(user);
    return user;
  }

  public async save(user: User): Promise<User> {
    Object.assign(this.users, user);
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;
    return user;
  }

  public async findByName(firstName: string): Promise<User | undefined> {
    const user = this.users.find(user => user.firstName === firstName);
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);
    return undefined;
  }

  public async findAll(): Promise<User[] | undefined> {
    return undefined;
  }
}

export default FakeUsersRepository;
