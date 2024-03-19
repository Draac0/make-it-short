import { Module } from '@nestjs/common';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from '@/modules/url/url.entity';

@Module({
	imports: [TypeOrmModule.forFeature([UrlEntity])],
	controllers: [UrlController],
	providers: [UrlService],
	exports: [UrlService],
})
export class UrlModule {}
