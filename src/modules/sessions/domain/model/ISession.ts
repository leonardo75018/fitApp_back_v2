import { IWeek } from '@modules/weeks/domain/mdoel/Week';

export interface ISession {
  id: string;
  name: string;
  backDrop: string;
  week_id: string;
  week: IWeek;
  created_at: Date;
  updated_at: Date;
}
