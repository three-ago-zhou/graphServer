import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { ArticleTypeEntity } from "./articleType.entity";

@Entity('article')
export class ArticleEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;

    @CreateDateColumn()
    creationDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

    @Column('text')
    description: string;

    @Column()
    links: string[];

    @Column(type => UserEntity)
    @ManyToOne(type => UserEntity, user => user.articleList)
    user: UserEntity;

    @ManyToOne(type => ArticleTypeEntity, article_type => article_type._id)
    articleType_id: ObjectID;

    @Column(type => ArticleTypeEntity)
    @ManyToOne(type => ArticleTypeEntity, article_type => article_type.articleList_id)
    articleType: ArticleTypeEntity;
}