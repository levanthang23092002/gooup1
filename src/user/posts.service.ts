import { HttpException, Injectable, Inject } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class PostsService {
  constructor(
    private readonly i18n: I18nService,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  posts = [
    {
      id: 1,
      name: 'thang',
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
    console.log(`Searching for posts with name`);
    return new Promise((resolve) => {
      resolve(this.posts);
    });
  }

  async getPost(postId: string): Promise<any> {
    const id = Number(postId);
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      const lang = this.request.headers['accept-language'] || 'vi';
      throw new HttpException(
        await this.i18n.translate('test.HELLO', { lang }),
        404,
      );
    }
    return post;
  }

  async getPostsByName(name: string): Promise<any> {
    const posts = this.posts.filter(
      (post) => post.name.toLowerCase() == name.toLowerCase(),
    );
    if (posts.length === 0) {
      const lang = this.request.headers['accept-language'] || 'vi';
      throw new HttpException(
        await this.i18n.translate('test.notFound', { lang }),
        404,
      );
    }
    return posts;
  }

  addPost(post): Promise<any> {
    return new Promise((resolve) => {
      this.posts.push(post);
      resolve(this.posts);
    });
  }

  async deletePost(postId: string): Promise<any> {
    const id = Number(postId);
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      const lang = this.request.headers['accept-language'] || 'en';
      throw new HttpException(
        await this.i18n.translate('test.notFound', { lang }),
        404,
      );
    }
    this.posts.splice(index, 1);
    return this.posts;
  }
}
