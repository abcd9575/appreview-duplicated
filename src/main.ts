import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { LoggingService } from './logging/logging.service'; // [2]

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useLogger(app.get(LoggingService));  // [2]
  await app.listen(3000);
}
bootstrap();
