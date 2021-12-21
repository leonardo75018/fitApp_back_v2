import { IPhysicalPlan } from '@modules/physicalPlan/domain/model/IPhysicalPlan';

export interface IWeek {
  id: string;
  name: string;
  start: string;
  end: string;
  physical_plan_id: string;
  physical_plan: IPhysicalPlan;
  created_at: Date;
  updated_at: Date;
}
