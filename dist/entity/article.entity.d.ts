import { ObjectID } from "typeorm";
import { UserEntity } from "./user.entity";
import { ArticleTypeEntity } from "./articleType.entity";
export declare class ArticleEntity {
    _id: ObjectID;
    title: string;
    bannerImage: string;
    articleImages: string[];
    creationDate: Date;
    updateDate: Date;
    description: string;
    links: string[];
    user: UserEntity;
    articleType_id: ObjectID;
    articleType: ArticleTypeEntity;
}
