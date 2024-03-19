import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Public } from '@/decorators/public.decorator';
import { ApiParam } from '@nestjs/swagger';
import { Response } from 'express';
import { UrlService } from '@/modules/url/url.service';

@Controller()
export class AppController {
	constructor(private urlService: UrlService) {}

	@Get(':url')
	@Public()
	@ApiParam({ name: 'url', type: String })
	async route(@Param('url') url: string, @Res() res: Response) {
		const urlEntity = await this.urlService.findOne({
			where: {
				shortUrl: url.toLowerCase(),
			},
		});

		if (!urlEntity) {
			res.status(HttpStatus.NOT_FOUND);
			res.send('URL not found');
			return;
		}

		const originalUrl = urlEntity.originalUrl;
		res.redirect(originalUrl);
	}
}
