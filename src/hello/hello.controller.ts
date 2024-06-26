import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'hello GooUp1';
  }
}
