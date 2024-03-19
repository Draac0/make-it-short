import { EntityRepository, Repository } from 'typeorm';
import { UrlEntity } from '@/modules/url/url.entity';

@EntityRepository(UrlEntity)
export class UrlRepository extends Repository<UrlEntity> {}
