import { ObjectID } from 'typeorm';
import { ArticleTypeEntity } from './articleType.entity';
export declare class UserEntity {
    _id: ObjectID;
    name: string;
    address: string;
    account: string;
    password: string;
    avatar: string;
    signature: string;
    email: string;
    phone: string;
    articleTypeList: ArticleTypeEntity[];
    articleList: ObjectID[];
}
