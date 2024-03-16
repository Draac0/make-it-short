import { Module } from '@nestjs/common';
import { ConfigService } from './services/config.service';
import { JwtCommonService } from './services/jwt-common.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [SharedModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				global: true,
				secret: configService.jwtSecret,
				signOptions: { expiresIn: '1d' },
			}),
		}),
	],
	providers: [ConfigService, JwtCommonService],
	exports: [ConfigService, JwtCommonService],
})
export class SharedModule {}
