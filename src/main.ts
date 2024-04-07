import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  // dotenv.config({ path: '../.env' });
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = app.get(ConfigService);
  const PORT = config.get('PORT') ?? 3000;

  await app.listen(PORT);
}
bootstrap();
