export declare class CreateArticleTypeInput {
    articleType: string;
    articleDate?: Date;
    articleIntroduce?: string;
    user_id: string;
}
export declare class CreateUserInput {
    name: string;
    address?: string;
    account: string;
    password: string;
    avatar: string;
    signature?: string;
    email?: string;
    phone?: string;
}
export declare class NewArticleInput {
    articleType_id: string;
    user_id: string;
    title: string;
    description: string;
    links: string[];
}
export declare class UpdateArticleInput {
    _id: string;
    articleType_id: string;
    title: string;
    description: string;
    links: string[];
}
export declare class UpdateArticleTypeInput {
    _id: string;
    articleType?: string;
    articleIntroduce?: string;
}
export declare class UpdateUserInput {
    _id: string;
    name: string;
    address?: string;
    account: string;
    password: string;
    avatar: string;
    signature?: string;
    email?: string;
    phone?: string;
}
export declare class Article {
    _id: string;
    title: string;
    creationDate: Date;
    updateDate: Date;
    description: string;
    links: string[];
    articleType_id: string;
    user: User;
    articleType?: ArticleType;
}
export declare class ArticleType {
    _id: string;
    articleType?: string;
    articleDate: Date;
    articleIntroduce?: string;
    articleList_id: string[];
    user: User;
    user_id: string;
}
export declare abstract class IMutation {
    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;
    abstract createArticleType(createArticleTypeInput: CreateArticleTypeInput): ArticleType | Promise<ArticleType>;
    abstract updateArticleType(updateArticleTypeInput: UpdateArticleTypeInput): ArticleType | Promise<ArticleType>;
    abstract deleteArticleType(_id: string): string | Promise<string>;
    abstract createArticle(newArticleInput: NewArticleInput): Article | Promise<Article>;
    abstract updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
}
export declare abstract class IQuery {
    abstract findUser(_id: string): User | Promise<User>;
    abstract findAllUser(): User[] | Promise<User[]>;
    abstract findUserByAccount(account: string): User | Promise<User>;
    abstract getArticleTypeAll(user_id: string): ArticleType[] | Promise<ArticleType[]>;
    abstract findOneByIdArticle(id: string): Article | Promise<Article>;
    abstract findArticleTitle(title: string): Article[] | Promise<Article[]>;
    abstract findArticleAll(): Article[] | Promise<Article[]>;
    abstract findArticleByArticleTypeId(_ids: string[]): Article[] | Promise<Article[]>;
}
export declare abstract class ISubscription {
    abstract articleAdded(): Article | Promise<Article>;
}
export declare class User {
    _id: string;
    name: string;
    address: string;
    account: string;
    password: string;
    avatar: string;
    signature: string;
    email: string;
    phone: string;
    articleTypeList: ArticleType[];
    articleList: string[];
}
export declare type Date = any;
