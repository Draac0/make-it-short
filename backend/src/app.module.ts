import { Module } from '@nestjs/common';
import { UsersModule } from '@/modules/users/users.module';
import { SharedModule } from '@/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@/shared/services/config.service';
import { AuthModule } from '@/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@/guards/auth.guard';
import { UrlModule } from './modules/url/url.module';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forRootAsync({
			imports: [SharedModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) =>
				configService.getPostgresConfig,
		}),
		AuthModule,
		SharedModule,
		UrlModule,
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
	],
})
export class AppModule {}
