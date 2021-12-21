import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICreateCategory } from '../domain/models/ICreateCategory';
import Category from '../infra/typeorm/entities/Categorys';
import { CategorysRepository } from '../infra/typeorm/repositories/CategorysRepository';

interface IResquest {
  name: string;
}

class CreateCategorysService {
  public async execute({ name }: ICreateCategory): Promise<Category> {
    const categorysRepository = getCustomRepository(CategorysRepository);

    const categoryExist = await categorysRepository.findByName(name);

    if (categoryExist) {
      throw new AppError('There is already one Category with this name');
    }

    const category = categorysRepository.create({ name });

    await categorysRepository.save(category);
    return category;
  }
}

export default CreateCategorysService;
