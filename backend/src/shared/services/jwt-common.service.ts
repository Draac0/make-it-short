import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';
import { JwtService } from '@nestjs/jwt';
import { SignInJwtDto } from '@/modules/auth/dto/signin-jwt.dto';

@Injectable()
export class JwtCommonService {
	constructor(
		private configService: ConfigService,
		private jwtService: JwtService,
	) {}

	verifyToken(token: string): Promise<SignInJwtDto> {
		return this.jwtService.verifyAsync(token, {
			secret: this.configService.jwtSecret,
		});
	}

	signJwtToken(payload: SignInJwtDto): Promise<string> {
		return this.jwtService.signAsync(payload, { expiresIn: '1d' });
	}
}
