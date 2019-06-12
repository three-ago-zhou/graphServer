import { Module } from '@nestjs/common';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from '../entity/article.entity';
import { UserEntity } from '../entity/user.entity';
import { ArticleTypeEntity } from '../entity/articleType.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleEntity, UserEntity, ArticleTypeEntity]),
  ],
  providers: [ArticleResolver, ArticleService],
})
export class ArticleModule {}