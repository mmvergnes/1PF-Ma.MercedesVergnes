export type UserStatus = 'Finalizado' | 'En curso...' | 'Pendiente';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  course: string;
  status: UserStatus;
}
