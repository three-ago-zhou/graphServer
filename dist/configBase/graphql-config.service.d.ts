import { GqlOptionsFactory, GqlModuleOptions } from "@nestjs/graphql";
export declare class GraphQlConfigService implements GqlOptionsFactory {
    constructor();
    createGqlOptions(): GqlModuleOptions;
}
