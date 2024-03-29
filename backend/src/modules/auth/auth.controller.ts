import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginRequestDto } from '@/modules/auth/dto/login-request.dto';
import { AuthService } from '@/modules/auth/auth.service';
import { Public } from '@/decorators/public.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	@ApiBody({ type: LoginRequestDto })
	@Public()
	login(@Body() payload: LoginRequestDto): Promise<string> {
		return this.authService.login(payload);
	}
}
