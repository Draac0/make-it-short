import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	dotenv.config();
	const app = await NestFactory.create(AppModule);

	// Setup Swagger
	const config = new DocumentBuilder()
		.setTitle('Make It Short Api')
		.setDescription(
			'Make it short is an url shortener service. This is the API documentation.',
		)
		.setVersion('1.0')
		.addBearerAuth()
		.addServer('http://localhost:3000')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('documentation', app, document);

	await app.listen(3000);
}

void bootstrap();
