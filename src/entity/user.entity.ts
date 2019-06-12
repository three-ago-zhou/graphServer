    
import { Column, Entity, ObjectIdColumn, ObjectID, OneToMany, Index, OneToOne } from 'typeorm';
import { ArticleTypeEntity } from './articleType.entity';
import { ArticleEntity } from './article.entity';


@Entity('user')
export class UserEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    account: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column('text')
    signature: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    @OneToMany(type => ArticleTypeEntity, article_type => article_type.user)
    articleTypeList: ArticleTypeEntity[];

    @Column()
    @OneToMany(type => ArticleEntity, article => article._id)
    articleList: ObjectID[];
}