
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateArticleTypeInput {
    articleType: string;
    articleDate?: Date;
    articleIntroduce?: string;
    user_id: string;
}

export class CreateUserInput {
    name: string;
    address?: string;
    account: string;
    password: string;
    avatar: string;
    signature?: string;
    email?: string;
    phone?: string;
}

export class NewArticleInput {
    articleType_id: string;
    user_id: string;
    title: string;
    bannerImage: string;
    articleImages: string[];
    description: string;
    links: string[];
}

export class UpdateArticleInput {
    _id: string;
    articleType_id: string;
    title: string;
    bannerImage: string;
    articleImages: string[];
    description: string;
    links: string[];
}

export class UpdateArticleTypeInput {
    _id: string;
    articleType?: string;
    articleIntroduce?: string;
}

export class UpdateUserInput {
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

export class Article {
    _id: string;
    bannerImage: string;
    articleImages: string[];
    title: string;
    creationDate: Date;
    updateDate: Date;
    description: string;
    links: string[];
    articleType_id: string;
    user: User;
    articleType?: ArticleType;
}

export class ArticleType {
    _id: string;
    articleType?: string;
    articleDate: Date;
    articleIntroduce?: string;
    articleList_id: string[];
    user: User;
    user_id: string;
}

export abstract class IMutation {
    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract createArticleType(createArticleTypeInput: CreateArticleTypeInput): ArticleType | Promise<ArticleType>;

    abstract updateArticleType(updateArticleTypeInput: UpdateArticleTypeInput): ArticleType | Promise<ArticleType>;

    abstract deleteArticleType(_id: string): string | Promise<string>;

    abstract createArticle(newArticleInput: NewArticleInput): Article | Promise<Article>;

    abstract updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
}

export abstract class IQuery {
    abstract findUser(_id: string): User | Promise<User>;

    abstract findAllUser(): User[] | Promise<User[]>;

    abstract findUserByAccount(account: string): User | Promise<User>;

    abstract getArticleTypeAll(user_id: string): ArticleType[] | Promise<ArticleType[]>;

    abstract findOneByIdArticle(id: string): Article | Promise<Article>;

    abstract findArticleTitle(title: string): Article[] | Promise<Article[]>;

    abstract findArticleAll(): Article[] | Promise<Article[]>;

    abstract findArticleByArticleTypeId(_ids: string[]): Article[] | Promise<Article[]>;
}

export abstract class ISubscription {
    abstract articleAdded(): Article | Promise<Article>;
}

export class User {
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

export type Date = any;
