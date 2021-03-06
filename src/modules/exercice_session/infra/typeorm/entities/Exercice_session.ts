import Exercice from '../../../../exercices/infra/typeorm/entities/Exercices';
import Session from '../../../../sessions/infra/typeorm/entities/Session';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IExerciceSession } from '@modules/exercice_session/domain/models/IExerciceSession';

@Entity('exercice_session')
class Exercice_session implements IExerciceSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repetitions: string;

  @Column()
  intensity: string;

  @Column()
  sessions_id: string;

  @OneToOne(() => Session)
  @JoinColumn({ name: 'sessions_id' })
  sessions: Session;

  @Column()
  exercices_id: string;

  @OneToOne(() => Exercice)
  @JoinColumn({ name: 'exercices_id' })
  exercices: Exercice;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Exercice_session;
