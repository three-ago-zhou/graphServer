import { Injectable } from "@nestjs/common";
import { GqlOptionsFactory, GqlModuleOptions } from "@nestjs/graphql";
import { join } from 'path';

@Injectable()
export class GraphQlConfigService implements GqlOptionsFactory {
    constructor() {
    }
    createGqlOptions(): GqlModuleOptions {
        return {
            typePaths: ['../**/*.graphql'],
            installSubscriptionHandlers: true,
            autoSchemaFile: 'src/schema.gql',
            // debug: true,
            definitions: {
              path: join(process.cwd(), 'src/graphql.ts'),
              outputAs: 'class',
            },
        };
    }
};
