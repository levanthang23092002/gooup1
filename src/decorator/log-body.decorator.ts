// src/modules/decorator/log-body.decorator.ts
import { createParamDecorator } from '@nestjs/common';

export const LogBody = createParamDecorator(() => {
  return 'Đây là Custom decorators mới tạo'; // Trả về nội dung của request body
});
