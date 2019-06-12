import { Entity, ObjectIdColumn, ObjectID, Column, OneToOne, ManyToOne, CreateDateColumn, OneToMany } from "typeorm";
import { Length, IsOptional } from "class-validator";
import { UserEntity } from './user.entity';
import { ArticleEntity } from "./article.entity";

@Entity('article_type')
export class ArticleTypeEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    @Length(1, 50)
    articleType: string;

    @CreateDateColumn()
    articleDate: Date;

    @Column('text', {
        nullable: true,
    })
    @Length(1, 100)
    @IsOptional()
    articleIntroduce?: string;

    @OneToOne(type => UserEntity, user => user._id)
    user_id: ObjectID
    
    @ManyToOne(type => UserEntity, user => user.articleTypeList)
    user: UserEntity;

    @OneToMany(type => ArticleEntity, article => article._id)
    articleList_id: ObjectID[];
}