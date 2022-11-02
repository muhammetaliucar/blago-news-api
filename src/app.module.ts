import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { NewsModule } from './news/news.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule,UsersModule, NewsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
