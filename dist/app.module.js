"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_module_1 = require("./user/user.module");
const data_scalar_1 = require("./common/scalars/data.scalar");
const articleType_module_1 = require("./articleType/articleType.module");
const article_module_1 = require("./article/article.module");
const graphql_config_service_1 = require("./configBase/graphql-config.service");
const mongodb_config_service_1 = require("./configBase/mongodb-config.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: mongodb_config_service_1.MongodbConfigService,
            }),
            graphql_1.GraphQLModule.forRootAsync({
                useClass: graphql_config_service_1.GraphQlConfigService,
            }),
            user_module_1.UserModule,
            articleType_module_1.ArticleTypeModule,
            article_module_1.ArticleModule,
        ],
        providers: [
            data_scalar_1.DateScalar,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map