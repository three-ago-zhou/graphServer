import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { ArticleTypeService } from './articleType.service';

import { CreateArticleTypeInput, UpdateArticleTypeInput, ArticleType } from './models/articleType';
import { ObjectID } from "typeorm";

@Resolver(of => ArticleType)
export class ArticleTypeResolver {
    constructor(private readonly articleTypeService: ArticleTypeService) {}

    @Query(returns => [ArticleType])
    async getArticleTypeAll(
        @Args('user_id')
        user_id: string,
    ): Promise<ArticleType[]> {
        return await this.articleTypeService.getArticleTypeAll(user_id);
    }

    @Mutation(returns => ArticleType)
    async createArticleType(
        @Args('createArticleTypeInput') createArticleTypeInput: CreateArticleTypeInput,
    ): Promise<ArticleType> {
        return await this.articleTypeService.createArticleType(createArticleTypeInput);
    }

    @Mutation(returns => ArticleType)
    async updateArticleType(
        @Args('updateArticleTypeInput') updateArticleTypeInput: UpdateArticleTypeInput,
    ): Promise<ArticleType> {
        return await this.articleTypeService.updateArticleType(updateArticleTypeInput);
    }

    @Mutation(returns => String)
    async deleteArticleType(
        @Args('_id')
        _id: string,
    ): Promise<string> {
        return await this.articleTypeService.deleteArticleType(_id);
    }
};
