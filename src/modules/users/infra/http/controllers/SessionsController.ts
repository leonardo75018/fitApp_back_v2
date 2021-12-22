import { Request, Response } from 'express';
import CreateSessionsService from '../../../services/CreateSessionsService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';


export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UsersRepository();

    const createSession = new CreateSessionsService(userRepository);

    const user = await createSession.execute({
      email,
      password,
    });

    return response.json(user);
  }
}
