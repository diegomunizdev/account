import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminModel } from 'src/domain/models/admin.model';

import { AdminResponse } from '../../../domain/responses/accounts/admin.response';
import { AdminService } from '../../../usecases/services/accounts/admin.service';

@Controller('/accounts/admins')
export class AdminController {
  constructor(private readonly _service: AdminService) {}

  @Post()
  async create(@Body() body: AdminModel): Promise<AdminResponse> {
    return new Promise<AdminResponse>(async (resolve, reject) => {
      return await this._service
        .create(body)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<AdminResponse> {
    return new Promise<AdminResponse>(async (resolve, reject) => {
      return await this._service
        .findOneById(id)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  @Get()
  async findAll(): Promise<AdminResponse[]> {
    return new Promise<AdminResponse[]>(async (resolve, reject) => {
      return await this._service
        .findAll()
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  @Put()
  async update(@Body() body: AdminModel): Promise<AdminResponse> {
    return new Promise<AdminResponse>(async (resolve, reject) => {
      return await this._service
        .update(body)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this._service.delete(id);
  }
}
