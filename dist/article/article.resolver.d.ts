import { Article, NewArticleInput, UpdateArticleInput } from './models/article';
import { ArticleService } from './article.service';
export declare class ArticleResolver {
    private readonly articleService;
    constructor(articleService: ArticleService);
    findOneByIdArticle(id: string): Promise<Article>;
    findArticleTitle(title: string): Promise<Article[]>;
    findArticleAll(): Promise<Article[]>;
    findArticleByArticleTypeId(_ids: [String]): Promise<Article[]>;
    createArticle(newArticleInput: NewArticleInput): Promise<Article>;
    updateArticle(updateArticleInput: UpdateArticleInput): Promise<Article>;
    articleAdded(): AsyncIterator<{}>;
}
