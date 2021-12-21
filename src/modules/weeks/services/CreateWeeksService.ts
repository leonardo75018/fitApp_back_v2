import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICreateWeek } from '../domain/mdoel/ICreateWeek';
import Weeks from '../infra/typeorm/entities/Weeks';
import { WeeksRepository } from '../infra/typeorm/repositories/WeeksRepository';

interface IResquest {
  name: string;
  start: string;
  end: string;
  physical_plan_id: string;
}

class CreateWeeksService {
  public async execute({
    start,
    end,
    name,
    physical_plan_id,
  }: ICreateWeek): Promise<Weeks> {
    const weeksRepository = getCustomRepository(WeeksRepository);

    const weeksExist = await weeksRepository.findOne({
      where: {
        name,
      },
    });

    if (weeksExist) {
      throw new AppError('There is already one weeks with this name');
    }

    const weeks = weeksRepository.create({
      name,
      start,
      end,
      physical_plan_id,
    });

    await weeksRepository.save(weeks);
    return weeks;
  }
}

export default CreateWeeksService;
