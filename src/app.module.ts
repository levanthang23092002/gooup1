import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { PostsModule } from './user/posts.module';
import { PostsService } from './user/posts.service';
import { DatabaseModule } from './DatabaseModule/database.module';
import { ConfigModule } from './config/config.module';
import {
  AcceptLanguageResolver,
  I18nModule,
  QueryResolver,
  HeaderResolver,
} from 'nestjs-i18n';
import { join } from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, '../src/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
    ConfigModule, // Sử dụng ConfigModule để tải các biến môi trường
    DatabaseModule.forRootAsync(), // Sử dụng DatabaseModule
    PostsModule,
  ],
  controllers: [AppController, HelloController],
  providers: [AppService, PostsService],
})
export class AppModule {}
