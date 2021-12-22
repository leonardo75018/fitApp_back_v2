import { IWeek } from '@modules/weeks/domain/mdoel/Week';

export interface ISessions {
  id: string;
  name: string;
  backDrop: string;
  week_id: string;
  week: IWeek;
}
