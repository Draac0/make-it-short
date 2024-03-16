import { Injectable } from '@nestjs/common';
import { LoginRequestDto } from '@/modules/auth/dto/login-request.dto';
import { JwtCommonService } from '@/shared/services/jwt-common.service';

@Injectable()
export class AuthService {
	constructor(private jwtCommonService: JwtCommonService) {}

	login(payload: LoginRequestDto): Promise<string> {
		return this.jwtCommonService.signJwtToken({
			email: payload.email,
			roleId: '123',
			userId: '123',
		});
	}
}
