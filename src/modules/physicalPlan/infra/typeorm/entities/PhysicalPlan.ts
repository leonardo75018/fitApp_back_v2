import User from '../../../../users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IPhysicalPlan } from '@modules/physicalPlan/domain/model/IPhysicalPlan';

@Entity('physical_plan')
class PhysicalPlan implements IPhysicalPlan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  user_Id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_Id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default PhysicalPlan;
