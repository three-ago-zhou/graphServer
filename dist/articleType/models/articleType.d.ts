import { ObjectID } from "typeorm";
import { User } from "../../user/models/user";
export declare class ArticleType {
    _id: ObjectID;
    articleType: string;
    articleDate: Date;
    articleIntroduce?: string;
    articleList_id: ObjectID[];
    user: User;
    user_id: ObjectID;
}
export declare class CreateArticleTypeInput {
    articleType: string;
    articleDate: Date;
    articleIntroduce?: string;
    user_id: ObjectID;
}
export declare class UpdateArticleTypeInput {
    _id: ObjectID;
    articleType: string;
    articleIntroduce?: string;
}
