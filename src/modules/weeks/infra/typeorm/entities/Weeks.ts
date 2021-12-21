import PhysicalPlan from '../../../../physicalPlan/infra/typeorm/entities/PhysicalPlan';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IWeek } from '@modules/weeks/domain/mdoel/IWeek';

@Entity('weeks')
class Week implements IWeek {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  physical_plan_id: string;

  @OneToOne(() => PhysicalPlan)
  @JoinColumn({ name: 'physical_plan_id' })
  physical_plan: PhysicalPlan;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Week;
