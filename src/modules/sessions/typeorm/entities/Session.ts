import Week from '../../../weeks/typeorm/entities/Weeks';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sessions')
class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  backDrop: string;

  @Column()
  week_id: string;

  @OneToOne(() => Week)
  @JoinColumn({ name: 'week_id' })
  week: Week;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Session;
