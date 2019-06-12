import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { UserModule } from './user/user.module';
import { DateScalar } from './common/scalars/data.scalar';
import { ArticleTypeModule } from './articleType/articleType.module';
import { ArticleModule } from './article/article.module';

import { GraphQlConfigService } from './configBase/graphql-config.service';
import { MongodbConfigService } from './configBase/mongodb-config.service';



@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: '127.0.0.1',
    //   port: 5000,
    //   database: 'singleBog',
    //   entities: [ join(__dirname, 'entity/**.entity{.ts,.js}') ],
    //   synchronize: true,
    //   useNewUrlParser: true,
    // }),
    TypeOrmModule.forRootAsync({
      useClass: MongodbConfigService,
      // useExisting: MongodbConfigService,
    }),
    GraphQLModule.forRootAsync({
      useClass: GraphQlConfigService,
      // useExisting: GraphQlConfigService,
    }),
    // GraphQLModule.forRoot({
      // typePaths: ['./**/*.graphql'],
      // installSubscriptionHandlers: true,
      // autoSchemaFile: 'src/schema.gql',
      // debug: true,
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   outputAs: 'class',
      // },
    // }),
    UserModule,
    ArticleTypeModule,
    ArticleModule,
  ],
  providers: [
    DateScalar,
  ],
})
export class AppModule{
}
