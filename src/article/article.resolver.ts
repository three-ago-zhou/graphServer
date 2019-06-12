import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Article, NewArticleInput, UpdateArticleInput } from './models/article';
import { ArticleService } from './article.service';

const pubSub = new PubSub();

@Resolver(of => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(returns => Article)
  async findOneByIdArticle(@Args('id') id: string): Promise<Article> {
    const article = await this.articleService.findOneByIdArticle(id);
    if (!article) {
      throw new NotFoundException(id);
    }
    return article;
  }

  @Query(returns => [Article])
  async findArticleTitle(@Args('title') title: string): Promise<Article[]> {
    const articles = await this.articleService.findArticleTitle(title);
    return articles;
  }

  @Query(returns => [Article])
  async findArticleAll(): Promise<Article[]> {
    return await this.articleService.findArticleAll();
  }

  @Query(returns => [Article])
  async findArticleByArticleTypeId(@Args({ name: '_ids', type: () => [String] }) _ids: [String]): Promise<Article[]> {
    return await this.articleService.findArticleByArticleTypeId(_ids);
  }

  @Mutation(returns => Article)
  async createArticle(
    @Args('newArticleInput') newArticleInput: NewArticleInput,
  ): Promise<Article> {
    const article = await this.articleService.createArticle(newArticleInput);
    pubSub.publish('articleAdded', { articleAdded: article });
    return article;
  }

  @Mutation(returns => Article)
  async updateArticle(
    @Args('updateArticleInput') updateArticleInput: UpdateArticleInput,
  ): Promise<Article> {
    const article = await this.articleService.updateArticle(updateArticleInput);
    return article;
  }

  @Subscription(returns => Article)
  articleAdded() {
    return pubSub.asyncIterator('articleAdded');
  }
}