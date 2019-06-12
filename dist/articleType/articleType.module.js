"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const articleType_service_1 = require("./articleType.service");
const articleType_resolvers_1 = require("./articleType.resolvers");
const articleType_entity_1 = require("../entity/articleType.entity");
const user_entity_1 = require("../entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ArticleTypeModule = class ArticleTypeModule {
};
ArticleTypeModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([articleType_entity_1.ArticleTypeEntity, user_entity_1.UserEntity]),
        ],
        providers: [
            articleType_service_1.ArticleTypeService,
            articleType_resolvers_1.ArticleTypeResolver,
        ]
    })
], ArticleTypeModule);
exports.ArticleTypeModule = ArticleTypeModule;
//# sourceMappingURL=articleType.module.js.map