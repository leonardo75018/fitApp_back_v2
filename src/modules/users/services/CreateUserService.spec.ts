import 'reflect-metadata';
import CreateUserService from './CreateUserService';
import FakeUserRepository from '../infra/typeorm/repositories/fakes/fakeUsersRepositories';
import AppError from '@shared/errors/AppError';

let fakeUserRepository: FakeUserRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    createUser = new CreateUserService(fakeUserRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      firstName: 'leo',
      lastName: 'antonio',
      email: 'leonardo@gmail.com',
      password: 'hege',
      role: 'admin',
    });

    expect(user).toHaveProperty('id');
  });
  it('should not be able to create two clients whith the same email', async () => {
    await createUser.execute({
      firstName: 'leo',
      lastName: 'antonio',
      email: 'leonardo@gmail.com',
      password: 'hege',
      role: 'admin',
    });

    expect(
      createUser.execute({
        firstName: 'leo',
        lastName: 'antonio',
        email: 'leonardo@gmail.com',
        password: 'hege',
        role: 'admin',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
