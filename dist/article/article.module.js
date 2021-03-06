"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const article_resolver_1 = require("./article.resolver");
const article_service_1 = require("./article.service");
const typeorm_1 = require("@nestjs/typeorm");
const article_entity_1 = require("../entity/article.entity");
const user_entity_1 = require("../entity/user.entity");
const articleType_entity_1 = require("../entity/articleType.entity");
let ArticleModule = class ArticleModule {
};
ArticleModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([article_entity_1.ArticleEntity, user_entity_1.UserEntity, articleType_entity_1.ArticleTypeEntity]),
        ],
        providers: [article_resolver_1.ArticleResolver, article_service_1.ArticleService],
    })
], ArticleModule);
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map