export interface Bill {
  balance: number;
  dayDue: number;
  id: number;
  interest: number;
  name: string;
  payment: number;
  user_id?: string;
}
