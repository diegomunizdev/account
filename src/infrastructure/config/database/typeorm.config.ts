import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AdminEntity } from '../../entities/admin.entity';

dotenv.config();

const DATABASE = {
  postgres: 'postgres',
};

const typeOrmModule: TypeOrmModuleOptions = {
  type: DATABASE[process.env.DB_TYPE],
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [AdminEntity],
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
};

export default typeOrmModule;
