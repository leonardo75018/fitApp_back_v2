import { IUser } from '@modules/users/domain/model/IUser';

export interface IPhysicalPlan {
  id: string;
  name: string;
  start: string;
  end: string;
  user_Id: string;
  user: IUser;
  created_at: Date;
  updated_at: Date;
}
