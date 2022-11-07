/* eslint-disable prettier/prettier */
/* eslint-disable prefer-rest-params */
import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService extends ConsoleLogger {
  error(message: any, stack?: string, context?: string) {
    super.error.apply(this, arguments);
    console.log(this, arguments, 'in super', typeof(arguments), typeof(this))
    this.doSomething();
  }
  warn(message: any, stack?: string, context?: string) {
    super.warn.apply(this, arguments);
    this.doSomething();
  }
  log(message: any, stack?: string, context?: string) {
    super.log.apply(this, arguments);
    this.doSomething();
  }

  private doSomething() {
    console.log('하이');
    // 여기에 로깅에 관련된 부가 로직을 추가합니다.
    // ex. DB에 저장
  }
}
