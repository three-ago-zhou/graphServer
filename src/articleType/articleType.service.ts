import { Injectable, NotFoundException } from '@nestjs/common';
import { ObjectID }  from 'mongodb';
import { CreateArticleTypeInput, UpdateArticleTypeInput, ArticleType } from './models/articleType';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ArticleTypeEntity } from '../entity/articleType.entity';
import { UserEntity } from '../entity/user.entity'; 

@Injectable()
export class ArticleTypeService {

    constructor(
        @InjectRepository(ArticleTypeEntity)
        private readonly ArticleTypeRepository: MongoRepository<ArticleTypeEntity>,
        @InjectRepository(UserEntity)
        private readonly UserRepository: MongoRepository<UserEntity>,
    ) {}

    async getArticleTypeAll(user_id: string): Promise<ArticleType[]> {
        return await this.ArticleTypeRepository.find({ user_id: ObjectID(user_id) });
    };

    async createArticleType(createArticleTypeInput: CreateArticleTypeInput): Promise<ArticleType> {
        const user = await this.UserRepository.findOne(createArticleTypeInput.user_id);
        delete user.articleTypeList;
        delete user.articleList;
        const setDateArticleTypeInput = {
            ...createArticleTypeInput,
            user,
            user_id: ObjectID(createArticleTypeInput.user_id),
            articleList_id: [],
        }
        const newCreateArticleType = await this.ArticleTypeRepository.save(setDateArticleTypeInput);
        const createArticle = {
            ...createArticleTypeInput,
            _id: ObjectID(newCreateArticleType._id),
        };
        delete createArticle.user_id;
        await this.UserRepository.updateOne(
            { _id: ObjectID(createArticleTypeInput.user_id) },
            {  
                $push: { 'articleTypeList': createArticle }
            },
        );
        return newCreateArticleType;
    };

    async updateArticleType (updateArticleInput: UpdateArticleTypeInput): Promise<ArticleType> {
        const _id = updateArticleInput._id;
        delete updateArticleInput._id;
        await this.ArticleTypeRepository.update(_id, updateArticleInput);
        return await this.ArticleTypeRepository.findOne(updateArticleInput._id);
    };

    async deleteArticleType(_id: string): Promise<string> {
        const articleTypeData = await this.ArticleTypeRepository.findOne(_id);
        if (!articleTypeData) {
            throw new NotFoundException('无法查询到分类');
        }
        await this.ArticleTypeRepository.remove(articleTypeData);
        return '删除成功';
    };
}