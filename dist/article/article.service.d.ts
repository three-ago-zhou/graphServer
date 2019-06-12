import { Article, NewArticleInput, UpdateArticleInput } from './models/article';
import { ArticleEntity } from '../entity/article.entity';
import { MongoRepository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { ArticleTypeEntity } from '../entity/articleType.entity';
export declare class ArticleService {
    private readonly ArticleRepository;
    private readonly UserRepository;
    private readonly ArticleTypeRepository;
    constructor(ArticleRepository: MongoRepository<ArticleEntity>, UserRepository: MongoRepository<UserEntity>, ArticleTypeRepository: MongoRepository<ArticleTypeEntity>);
    createArticle(newArticleInput: NewArticleInput): Promise<Article>;
    findOneByIdArticle(id: string): Promise<Article>;
    findArticleTitle(title: string): Promise<Article[]>;
    findArticleAll(): Promise<Article[]>;
    findArticleByArticleTypeId(_ids: [String]): Promise<Article[]>;
    updateArticle(updateArticleInput: UpdateArticleInput): Promise<Article>;
}
