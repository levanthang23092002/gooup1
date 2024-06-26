import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreatePostDto } from './create-post.dto';

@Controller('user')
export class PostsController {
  constructor(private postService: PostsService) {}
  @Get()
  async getPosts() {
    const posts = await this.postService.getPosts();
    return posts;
  }
  @Get(':postId')
  async getCourse(@Param('postId') postId) {
    const post = await this.postService.getPost(postId);
    return post;
  }
  @Post()
  async addPost(@Body() CreatePostDto: CreatePostDto) {
    const post = await this.postService.addPost(CreatePostDto);
    return post;
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    const post = await this.postService.deletePost(id);
    return post;
  }
}
