import { ArticleTypeService } from './articleType.service';
import { CreateArticleTypeInput, UpdateArticleTypeInput, ArticleType } from './models/articleType';
export declare class ArticleTypeResolver {
    private readonly articleTypeService;
    constructor(articleTypeService: ArticleTypeService);
    getArticleTypeAll(user_id: string): Promise<ArticleType[]>;
    createArticleType(createArticleTypeInput: CreateArticleTypeInput): Promise<ArticleType>;
    updateArticleType(updateArticleTypeInput: UpdateArticleTypeInput): Promise<ArticleType>;
    deleteArticleType(_id: string): Promise<string>;
}
