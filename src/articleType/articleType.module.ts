import { Module } from "@nestjs/common";
import { ArticleTypeService } from './articleType.service';
import { ArticleTypeResolver } from './articleType.resolvers';
import { ArticleTypeEntity } from '../entity/articleType.entity';
import { UserEntity } from '../entity/user.entity'; 
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([ArticleTypeEntity, UserEntity]),
    ],
    providers: [
        ArticleTypeService,
        ArticleTypeResolver,
    ]
})
export class ArticleTypeModule {}