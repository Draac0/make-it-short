import { Injectable } from '@nestjs/common';
import { UrlRepository } from '@/modules/url/url.repository';
import { BaseService } from '@/common/base-service';
import { UrlEntity } from '@/modules/url/url.entity';

@Injectable()
export class UrlService extends BaseService<UrlEntity> {
	constructor(public urlRepository: UrlRepository) {
		super(urlRepository);
	}
}
