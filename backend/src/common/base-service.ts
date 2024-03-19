import {
	DeepPartial,
	FindOneOptions,
	ObjectLiteral,
	Repository,
} from 'typeorm';

export class BaseService<Entity extends ObjectLiteral> {
	constructor(public repository: Repository<Entity>) {}

	async create(data: DeepPartial<Entity>): Promise<Entity> {
		try {
			return this.repository.save(data);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}

	async findOne(
		options: FindOneOptions<Entity> | undefined,
	): Promise<Entity | undefined> {
		return this.repository.findOne({ ...options });
	}
}
