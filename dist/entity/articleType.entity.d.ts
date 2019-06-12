import { ObjectID } from "typeorm";
import { UserEntity } from './user.entity';
export declare class ArticleTypeEntity {
    _id: ObjectID;
    articleType: string;
    articleDate: Date;
    articleIntroduce?: string;
    user_id: ObjectID;
    user: UserEntity;
    articleList_id: ObjectID[];
}
