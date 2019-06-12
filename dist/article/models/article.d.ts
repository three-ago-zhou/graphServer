import { ObjectID } from 'typeorm';
import { User } from '../../user/models/user';
import { ArticleType } from '../../articleType/models/articleType';
export declare class Article {
    _id: ObjectID;
    title: string;
    creationDate: Date;
    updateDate: Date;
    description: string;
    links: string[];
    articleType_id: ObjectID;
    user: User;
    articleType: ArticleType;
}
export declare class NewArticleInput {
    articleType_id: ObjectID;
    user_id: ObjectID;
    title: string;
    description: string;
    links?: string[];
}
export declare class UpdateArticleInput {
    _id: ObjectID;
    articleType_id: ObjectID;
    title?: string;
    description?: string;
    links?: string[];
}
