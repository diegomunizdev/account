import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeOrmModule from './infrastructure/config/database/typeorm.config';
import { AdminModule } from './usecases/modules/accounts/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmModule),
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
