import { IExercice } from '@modules/exercices/domain/model/IExercerice';
import { ISession } from '@modules/sessions/domain/model/ISession';

export interface IExerciceSession {
  id: string;
  repetitions: string;
  intensity: string;
  sessions_id: string;
  sessions: ISession;
  exercices_id: string;
  exercices: IExercice;
  created_at: Date;
  updated_at: Date;
}
