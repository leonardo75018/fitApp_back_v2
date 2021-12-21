import { ICategory } from '../models/ICategory';
import { ICreateCategory } from '../models/ICreateCategory';

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategory | undefined>;
  findById(id: string): Promise<ICategory | undefined>;
  // create(date: ICreateCategory): Promise<ICategory>;
  // save(category: ICategory): Promise<ICategory>;
}
