
import { Injectable } from '@nestjs/common';
import { Article, NewArticleInput, UpdateArticleInput } from './models/article';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from '../entity/article.entity';
import { MongoRepository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { ObjectID }  from 'mongodb';
import { ArticleTypeEntity } from '../entity/articleType.entity';

@Injectable()
export class ArticleService {

  constructor(
    @InjectRepository(ArticleEntity)
    private readonly ArticleRepository: MongoRepository<ArticleEntity>,
    @InjectRepository(UserEntity)
    private readonly UserRepository: MongoRepository<UserEntity>,
    @InjectRepository(ArticleTypeEntity)
    private readonly ArticleTypeRepository: MongoRepository<ArticleTypeEntity>,
  ) {}

  async createArticle(newArticleInput: NewArticleInput): Promise<Article> {
    const user = await this.UserRepository.findOne(newArticleInput.user_id);
    delete user.articleTypeList;
    delete user.articleList;
    const articleType = await this.ArticleTypeRepository.findOne(newArticleInput.articleType_id);
    delete articleType.user;
    delete articleType.user_id;
    delete articleType.articleList_id;
    delete newArticleInput.user_id;
    const insertArticle = {
      user,
      articleType,
      ...newArticleInput,
    };
    const newArticle = await this.ArticleRepository.save(insertArticle);
    await this.UserRepository.updateOne(
      { _id: ObjectID(user._id) },
      {  
        $push: { 'articleList': newArticle._id }
      },
    );
    await this.ArticleTypeRepository.updateOne(
      { _id: ObjectID(newArticleInput.articleType_id) },
      {  
        $push: { 'articleList_id': ObjectID(newArticle._id) },
      },
    );
    return newArticle;
  }

  async findOneByIdArticle(id: string): Promise<Article> {
    const article = await this.ArticleRepository.findOne(id);
    return article;
  }

  async findArticleTitle(title: string): Promise<Article[]> {
      const articleArr = await this.ArticleRepository.find({
        where: {
          title: { "$regex": title }
        }
      });
      return articleArr;
  }

  async findArticleAll(): Promise<Article[]> {
    const articleArr = await this.ArticleRepository.find();
    return articleArr;
  }

  async findArticleByArticleTypeId(_ids: [String]): Promise<Article[]> {
    const articleArr = await this.ArticleRepository.find({
      where: {
        articleType_id: { "$in": _ids },
      }
    });
    return articleArr;
  }

  async updateArticle(updateArticleInput: UpdateArticleInput): Promise<Article> {
    const articleType = await this.ArticleTypeRepository.findOne(updateArticleInput.articleType_id);
    delete articleType.user;
    delete articleType.user_id;
    delete articleType.articleList_id;
    // delete articleType.articleType;
    const updateArticle = {
      articleType,
      ...updateArticleInput,
    };
    delete updateArticle._id;
    await this.ArticleRepository.update(updateArticleInput._id, updateArticle);
    await this.ArticleTypeRepository.updateOne(
      { _id: ObjectID(updateArticleInput.articleType_id) },
      {  
        $pull: { 'articleList_id': ObjectID(updateArticleInput._id) },
      },
    )
    return await this.ArticleRepository.findOne(updateArticleInput._id);
  }
}