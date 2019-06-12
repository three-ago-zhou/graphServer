import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Length, Min, IsOptional } from "class-validator";
import { ObjectID } from "typeorm";
import { User } from "../../user/models/user";


@ObjectType()
export class ArticleType {
    @Field(type => ID, {
        description: "文章类型id"
    })
    _id: ObjectID;

    @Field({
        nullable: true,
    })
    @Length(1, 50)
    articleType: string;

    @Field()
    articleDate: Date;

    @Field({
        nullable: true,
        description: "文章类型简介",
    })
    @IsOptional()
    @Length(1, 100)
    articleIntroduce?: string;

    @Field(type => [ID])
    articleList_id: ObjectID[];

    @Field(type => User)
    user: User;

    @Field(type => ID)
    user_id: ObjectID;
}

@InputType()
export class CreateArticleTypeInput {
    @Field()
    @Length(1, 50)
    articleType: string;

    @Field({
        nullable: true,
    })
    @IsOptional()
    articleDate: Date;

    @Field({
        nullable: true,
        description: "文章类型简介",
    })
    @IsOptional()
    @Length(1, 100)
    articleIntroduce?: string;

    @Field(type => ID, {
        description: '用户id'
    })
    user_id: ObjectID;
}

@InputType()
export class UpdateArticleTypeInput {
    @Field(type => ID, {
        description: "文章类型id"
    })
    _id: ObjectID;

    @Field({
        nullable: true,
    })
    @IsOptional()
    @Length(1, 50)
    articleType: string;

    @Field({
        nullable: true,
        description: "文章类型简介",
    })
    @IsOptional()
    @Length(1, 100)
    articleIntroduce?: string;
    
}
