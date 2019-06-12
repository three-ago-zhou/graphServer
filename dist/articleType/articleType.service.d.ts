import { CreateArticleTypeInput, UpdateArticleTypeInput, ArticleType } from './models/articleType';
import { MongoRepository } from 'typeorm';
import { ArticleTypeEntity } from '../entity/articleType.entity';
import { UserEntity } from '../entity/user.entity';
export declare class ArticleTypeService {
    private readonly ArticleTypeRepository;
    private readonly UserRepository;
    constructor(ArticleTypeRepository: MongoRepository<ArticleTypeEntity>, UserRepository: MongoRepository<UserEntity>);
    getArticleTypeAll(user_id: string): Promise<ArticleType[]>;
    createArticleType(createArticleTypeInput: CreateArticleTypeInput): Promise<ArticleType>;
    updateArticleType(updateArticleInput: UpdateArticleTypeInput): Promise<ArticleType>;
    deleteArticleType(_id: string): Promise<string>;
}
