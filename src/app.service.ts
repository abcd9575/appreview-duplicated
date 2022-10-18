import { Injectable, Logger } from '@nestjs/common';
import { LoggingService } from './logging/logging.service';

@Injectable()
export class AppService {
  // private readonly logger = new Logger(AppService.name);
  constructor(private logging: LoggingService) {}

  getHello(): string {
    this.logging.error('level: error');
    this.logging.warn('level: warn');
    this.logging.log('level: log');
    this.logging.verbose('level: verbose');
    this.logging.debug('level: debug');

    return 'Hello World!';
  }
}
