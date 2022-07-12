import { AccountType } from '../../domain/utils/interfaces/account.interface';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'admin' })
export class AdminEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 150 })
  name: string;

  @Column({ name: 'email', type: 'varchar', unique: true, length: 50 })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 15 })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'last_login', nullable: true })
  lastLogin: Date;

  @Column({ name: 'type', type: 'varchar', default: 'admin' })
  type: AccountType;
}
