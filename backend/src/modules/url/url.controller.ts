import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '@/decorators/public.decorator';
import { CreateUrlDto } from '@/modules/url/dto/create-url.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UrlEntity } from '@/modules/url/url.entity';
import { UrlService } from '@/modules/url/url.service';

@Controller('url')
@ApiTags('Url')
export class UrlController {
	constructor(private urlService: UrlService) {}

	@Public()
	@Post()
	@ApiOkResponse({
		description: 'Create a new short URL',
		status: 201,
		type: UrlEntity,
	})
	@ApiBody({ type: CreateUrlDto })
	createUrl(@Body() payload: CreateUrlDto) {
		console.log(payload);
		return this.urlService.create({
			originalUrl: payload.originalUrl,
			shortUrl: payload.shortUrl,
			expiryDate: payload.expirationDate,
		});
	}
}
