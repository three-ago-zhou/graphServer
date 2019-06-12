import { Field, ID, ObjectType, InputType } from 'type-graphql';
import { IsOptional, Length } from 'class-validator';
import { ObjectID } from 'typeorm';
import { User } from '../../user/models/user';
import { ArticleType } from '../../articleType/models/articleType';

@ObjectType()
export class Article {
  @Field(type => ID, {
    description: '文章id',
  })
  _id: ObjectID;

  @Field()
  title: string;

  @Field()
  creationDate: Date;

  @Field()
  updateDate: Date;

  @Field()
  description: string;

  @Field(type => [String], {
    nullable: true,
  })
  @IsOptional()
  links: string[];

  @Field(type => ID)
  articleType_id: ObjectID;

  @Field(type => User)
  user: User;

  @Field(type => ArticleType, {
    nullable: true,
  })
  @IsOptional()
  articleType: ArticleType;
}

@InputType()
export class NewArticleInput {
  @Field(type => ID, {
    description: '文章类型ID'
  })
  articleType_id: ObjectID;

  @Field(type => ID, {
    description: '用户ID',
  })
  user_id: ObjectID;

  @Field()
  @Length(1, 100)
  title: string;

  @Field()
  @Length(30, 255)
  description: string;

  @Field(type => [String], {
    nullable: true,
  })
  @IsOptional()
  links?: string[];
}

@InputType()
export class UpdateArticleInput {
    @Field(type => ID, {
      description: '文章id',
    })
    _id: ObjectID;

    @Field(type => ID, {
      description: '文章类型ID'
    })
    articleType_id: ObjectID;

    @Field()
    @Length(1, 100)
    title?: string;

    @Field()
    description?: string;

    @Field(type => [String], {
        nullable: true,
    })
    @IsOptional()
    links?: string[];
}