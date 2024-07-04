import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';

@Controller('user')
export class PostsController {
  constructor(private postService: PostsService) {}
  @Get(':postId')
  async getPost(@Param('postId') postId) {
    const post = await this.postService.getPost(postId);
    return post;
  }

  @Get()
  async getPostsName(@Query('name') name: string) {
    const posts = await this.postService.getPostsByName(name);
    return posts;
  }

  @Post()
  async addPost(@Body() createPostDto: CreatePostDto) {
    const post = await this.postService.addPost(createPostDto);
    return post;
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    const post = await this.postService.deletePost(id);
    return post;
  }
}
