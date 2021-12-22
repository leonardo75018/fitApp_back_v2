import { IExercice } from '@modules/exercices/domain/model/IExercerice';
import { ISession } from '@modules/sessions/domain/model/ISession';

export interface ICreateExerciceSession {
  repetitions: string;
  intensity: string;
  sessions_id: string;
  sessions: ISession;
  exercices_id: string;
  exercices: IExercice;
}
