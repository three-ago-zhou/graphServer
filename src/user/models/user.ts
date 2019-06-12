import { ObjectType, Field, ID, InputType } from "type-graphql";
import { IsOptional, Length } from 'class-validator';
import { ObjectID } from "typeorm";
import { ArticleType } from '../../articleType/models/articleType';

@ObjectType()
export class User {

    @Field(type => ID)
    _id: ObjectID;

    @Field()
    @Length(1, 20)
    name: string;

    @Field()
    address: string;

    @Field()
    account: string;

    @Field()
    password: string;

    @Field()
    avatar: string;

    @Field()
    signature: string;

    @Field()
    email: string;

    @Field()
    phone: string;

    @Field(type => [ArticleType], {
        nullable: true,
    })
    articleTypeList: ArticleType[];

    @Field(type => [ID])
    articleList: ObjectID[];
}

@InputType()
export class CreateUserInput {
    @Field()
    @Length(1, 20)
    name: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    address?: string;

    @Field()
    account: string;

    @Field()
    password: string;

    @Field()
    avatar: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    signature?: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    email?: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    phone?: string;
}

@InputType()
export class UpdateUserInput {
    @Field(type => ID)
    _id: string;

    @Field()
    @Length(1, 20)
    name: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    address?: string;

    @Field()
    account: string;

    @Field()
    password: string;

    @Field()
    avatar: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    signature?: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    email?: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    phone?: string;
}