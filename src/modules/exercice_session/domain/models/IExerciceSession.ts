export interface IExerciceSession {
  id: string;
  repetitions: string;
  intensity: string;
  sessions_id: string;
  sessions: Session;
  exercices_id: string;
  exercices: Exercice;
  created_at: Date;
  updated_at: Date;
}
