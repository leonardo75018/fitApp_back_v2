import { getCustomRepository } from 'typeorm';
import Weeks from '../infra/typeorm/entities/Weeks';
import { WeeksRepository } from '../infra/typeorm/repositories/WeeksRepository';

class ListWeeksService {
  public async execute(): Promise<Weeks[] | undefined> {
    const weeksRepository = getCustomRepository(WeeksRepository);

    const weeks = weeksRepository.find({
      relations: ['physical_plan'],
      order: {
        name: 'ASC',
        id: 'DESC',
      },
    });

    return weeks;
  }
}

export default ListWeeksService;
