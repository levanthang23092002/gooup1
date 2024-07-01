import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PostsController } from './user.controller';
import { PostsService } from './posts.service';
import { LoggerMiddleware } from '../logger/middleware';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(PostsController); // Áp dụng middleware cho tất cả các routes trong PostsController
  }
}
