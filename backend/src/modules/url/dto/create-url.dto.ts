import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUrlDto {
	@ApiProperty()
	@IsUrl()
	originalUrl: string;

	@ApiProperty()
	@IsString()
	shortUrl: string;

	@ApiPropertyOptional()
	@IsString()
	@IsOptional()
	expirationDate?: string;
}
