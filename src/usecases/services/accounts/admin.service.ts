import { Injectable } from '@nestjs/common';

import { AdminResponse } from '../../../domain/responses/accounts/admin.response';
import { AdminMapper } from '../../../domain/mappers/accounts/admin.mapper';
import { AdminRepository } from '../../../infrastructure/repositories/accounts/admin.repository';
import { AdminModel } from '../../../domain/models/admin.model';
import { AdminEntity } from '../../../infrastructure/entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    private readonly _repository: AdminRepository,
    private readonly _mapper: AdminMapper,
  ) {}

  async create(admin: AdminModel): Promise<AdminResponse> {
    return new Promise<AdminResponse>(async (resolve, reject) => {
      return await this._repository
        .create(admin as AdminEntity)
        .then((result) => resolve(this._mapper.mapToAdminResponse(result)))
        .catch((err) => reject(err));
    });
  }

  async findOneById(id: number): Promise<AdminResponse> {
    return new Promise<AdminResponse>(async (resolve, reject) => {
      return await this._repository
        .findOneById(id)
        .then((result) => {
          return resolve(this._mapper.mapToAdminResponse(result));
        })
        .catch((err) => reject(err));
    });
  }

  async findAll(): Promise<AdminResponse[]> {
    return new Promise<AdminResponse[]>(async (resolve, reject) => {
      return await this._repository
        .findAll()
        .then((result) => {
          return resolve(this._mapper.mapToAdminsResponse(result));
        })
        .catch((err) => reject(err));
    });
  }

  async update(admin: AdminModel): Promise<AdminResponse> {
    return new Promise<AdminResponse>(async (resolve, reject) => {
      return await this._repository
        .update(admin as AdminEntity)
        .then((result) => resolve(this._mapper.mapToAdminResponse(result)))
        .catch((err) => reject(err));
    });
  }

  async delete(id: number): Promise<any> {
    return await this._repository.delete(id);
  }
}
