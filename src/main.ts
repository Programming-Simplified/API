import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';

async function bootstrap() {
	config();
	const app = await NestFactory.create(AppModule);
	await app.listen(8000);
}
bootstrap();
