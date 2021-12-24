import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { ICreateUser } from '../domain/model/ICreateUser';
import { IUser } from '../domain/model/IUser';
import { IUserRepository } from '../domain/repositories/IUserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository ')
    private userRepository: IUserRepository,
  ) { }
  public async execute({
    firstName,
    lastName,
    email,
    password,
    role,
  }: ICreateUser): Promise<IUser> {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.userRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    return user;
  }
}

export default CreateUserService;
