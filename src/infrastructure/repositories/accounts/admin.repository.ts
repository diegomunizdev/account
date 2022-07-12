import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AdminEntity } from '../../entities/admin.entity';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly _repository: Repository<AdminEntity>,
  ) {}

  async create(admin: AdminEntity): Promise<AdminEntity> {
    return new Promise<AdminEntity>(async (resolve, reject) => {
      const adm = this._repository.create(admin);
      return await this._repository
        .save(adm)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  async findOneById(id: number): Promise<AdminEntity> {
    return new Promise<AdminEntity>(async (resolve, reject) => {
      return await this._repository
        .findOne({ where: { id } })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  async findAll(): Promise<AdminEntity[]> {
    return new Promise<AdminEntity[]>(async (resolve, reject) => {
      return await this._repository
        .find()
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  async update(admin: AdminEntity): Promise<AdminEntity> {
    return new Promise<AdminEntity>(async (resolve, reject) => {
      return await this._repository
        .save(admin)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  async delete(id: number): Promise<any> {
    return await this._repository.delete(id);
  }
}
