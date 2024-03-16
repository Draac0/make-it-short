import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JwtCommonService } from '@/shared/services/jwt-common.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private jwtCommonService: JwtCommonService,
		private reflector: Reflector,
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const isPublic = this.reflector.get<boolean>(
			'isPublic',
			context.getHandler(),
		);
		if (isPublic) return true;

		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);
		if (!token) return false;
		const payload = await this.jwtCommonService.verifyToken(token);
		if (!payload.userId) return false;
		request.user = payload;
		return true;
	}

	private extractTokenFromHeader(request: Request): undefined | string {
		const [type, token] = request.headers.authorization?.split(' ') || [];
		return type === 'Bearer' ? token : undefined;
	}
}
