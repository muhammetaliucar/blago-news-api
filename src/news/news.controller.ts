import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getAllNews() {
    return this.newsService.getAllNews()
  }

  @Post('getByAuthorsNews')
  async getByAuthorsNews(@Body() input) {
    return this.newsService.getByAuthorsNews(input)
  }

  @Post('search')
  async search(@Body() input) {
    return this.newsService.search(input)
  }
 
}
