import { ICategoryRepository } from '@modules/category/domain/repositories/ICategoryRepository';
import { EntityRepository, Repository } from 'typeorm';
import Categorys from '../entities/Categorys';

@EntityRepository(Categorys)
export class CategorysRepository
  extends Repository<Categorys>
  implements ICategoryRepository {
  public async findByName(name: string): Promise<Categorys | undefined> {
    const category = this.findOne({
      where: {
        name,
      },
    });
    return category;
  }

  public async findById(id: string): Promise<Categorys | undefined> {
    const category = this.findOne({
      where: {
        id,
      },
    });
    return category;
  }
}
