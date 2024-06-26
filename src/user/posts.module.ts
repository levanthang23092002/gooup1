import { Module } from '@nestjs/common';
import { PostsController } from './user.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
