import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  posts = [
    {
      id: 1,
      name: 'thắng',
      title: 'is member NodeJS',
      description: 'Homework 79',
      email: 'levanthang@gmail.com',
    },
    {
      id: 2,
      name: 'Phúc',
      title: 'is member NodeJS',
      description: 'Homework 26',
      email: 'nguyenhuuphuc@gmail.com',
    },
  ];
  getPosts(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.posts);
    });
  }
  getPost(postId): Promise<any> {
    const id = Number(postId);
    return new Promise((resolve) => {
      const post = this.posts.find((post) => post.id === id);
      if (!post) {
        throw new HttpException('Post not found', 404);
      }
      resolve(post);
    });
  }
  addPost(post): Promise<any> {
    return new Promise((resolve) => {
      this.posts.push(post);
      resolve(this.posts);
    });
  }
  deletePost(postId): Promise<any> {
    const id = Number(postId);
    return new Promise((resolve) => {
      const index = this.posts.findIndex((post) => post.id === id);
      if (index === -1) {
        throw new HttpException('Post not found', 404);
      }
      this.posts.splice(index, 1);
      resolve(this.posts);
    });
  }
}
