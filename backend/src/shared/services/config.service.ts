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
			port: this.dbPort,
			synchronize: process.env.NODE_ENV === 'development',
			entities,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
		};
	}

	get jwtSecret(): string {
		const secret = process.env.JWT_SECRET;
		if (!secret) {
			throw new Error('JWT_SECRET is not defined');
		}
		return secret;
	}

	private get dbPort(): number {
		const port = process.env.DB_PORT;
		if (!port) {
			throw new Error('DB_PORT is not defined');
		}
		return parseInt(port);
	}
}
