import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class NewsService {

  constructor(private prisma:PrismaService){}

  async getAllNews(){
    return await this.prisma.news.findMany({
      orderBy:{
        createdAt:'desc'
      },
      where:{published:true},
      include:{author:true,category:true}
    })
  }

  async getByAuthorsNews(input:{authorId:number}){
    return await this.prisma.news.findMany({
      include:{category:true,author:true},
      where:{authorId:input.authorId}
    })
  }

  async search(input:{search:string}){
    console.log(input)
   return await this.prisma.news.findMany({

    include:{category:true,author:true},
    where:{title:{contains:input.search}}
   })
  }

  async limitPost(input){
    return await this.prisma.news.findMany({
      take:input.number
    })
  }
  
}
