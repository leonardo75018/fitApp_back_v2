import { getCustomRepository } from 'typeorm';
import Exercice_session from '../infra/typeorm/entities/Exercice_session';
import { Exercice_session_Repository } from '../infra/typeorm/repositories/Exercice_session_Repository';

class ListExerice_session_Service {
  public async execute(): Promise<Exercice_session[] | undefined> {
    const exercice_session_Repository = getCustomRepository(
      Exercice_session_Repository,
    );

    const exercice_session = exercice_session_Repository.find({
      relations: ['exercices', 'sessions'],
    });

    return exercice_session;
  }
}

export default ListExerice_session_Service;


