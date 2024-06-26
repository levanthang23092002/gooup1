import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { PostsModule } from './user/posts.module';
import { PostsService } from './user/posts.service';
import { DatabaseModule } from './DatabaseModule/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule, // Sử dụng ConfigModule để tải các biến môi trường
    DatabaseModule.forRootAsync(), // Sử dụng DatabaseModule
    PostsModule,
  ],
  controllers: [AppController, HelloController],
  providers: [AppService, PostsService],
})
export class AppModule {}
