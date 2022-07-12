import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminMapper } from '../../../domain/mappers/accounts/admin.mapper';
import { AdminController } from '../../../infrastructure/controllers/accounts/admin.controller';
import { AdminEntity } from '../../../infrastructure/entities/admin.entity';
import { AdminRepository } from '../../../infrastructure/repositories/accounts/admin.repository';
import { AdminService } from '../../services/accounts/admin.service';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([AdminEntity])],
  controllers: [AdminController],
  providers: [AdminService, AdminMapper, AdminRepository],
})
export class AdminModule {}
