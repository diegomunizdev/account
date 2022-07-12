import { AccountType } from '../utils/interfaces/account.interface';

export interface AdminModel {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  lastLogin?: Date;
  name?: string;
  email?: string;
  password?: string;
  type?: AccountType;
}
