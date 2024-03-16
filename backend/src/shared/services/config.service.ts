import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from 'process';

@Injectable()
export class ConfigService {
  get getPostgresConfig(): TypeOrmModuleOptions {
    const entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}'];
    console.log(process.env.DB_NAME);
    return {
      database: process.env.DB_NAME,
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      synchronize: process.env.NODE_ENV === 'development',
      entities,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    };
  }
}
