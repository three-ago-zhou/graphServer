import { ObjectID } from "typeorm";
import { ArticleType } from '../../articleType/models/articleType';
export declare class User {
    _id: ObjectID;
    name: string;
    address: string;
    account: string;
    password: string;
    avatar: string;
    signature: string;
    email: string;
    phone: string;
    articleTypeList: ArticleType[];
    articleList: ObjectID[];
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
