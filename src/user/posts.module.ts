import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AcceptLanguageResolver, I18nModule } from 'nestjs-i18n';
import { join } from 'path';
import { PostsController } from './user.controller';
import { PostsService } from './posts.service';
import { LoggerMiddleware } from '../middleware/loggger';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'vi',
      loaderOptions: {
        path: join(__dirname, '../../src/i18n/'),
        watch: true,
      },
      resolvers: [{ use: AcceptLanguageResolver, options: ['lang'] }],
    }),
  ], // Import I18nModule để sử dụng dịch vụ i18n trong module này
  controllers: [PostsController],
  providers: [PostsService, HttpExceptionFilter],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(PostsController); // Áp dụng middleware cho tất cả các routes trong PostsController
  }
}
