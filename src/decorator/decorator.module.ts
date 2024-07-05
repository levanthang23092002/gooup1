// src/modules/decorator/decorator.module.ts
import { Module } from '@nestjs/common';
import { DecoratorController } from './decorator.controller';

@Module({
  controllers: [DecoratorController],
})
export class DecoratorModule {}
