// src/modules/decorator/decorator.controller.ts
import { Controller, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LogBody } from './log-body.decorator';

@Controller('decorator')
export class DecoratorController {
  @Post()
  create(@LogBody() body: any) {
    return body; // Trả về nội dung của request body
  }
}
