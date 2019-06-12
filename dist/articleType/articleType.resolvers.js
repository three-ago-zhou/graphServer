"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const articleType_service_1 = require("./articleType.service");
const articleType_1 = require("./models/articleType");
let ArticleTypeResolver = class ArticleTypeResolver {
    constructor(articleTypeService) {
        this.articleTypeService = articleTypeService;
    }
    getArticleTypeAll(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleTypeService.getArticleTypeAll(user_id);
        });
    }
    createArticleType(createArticleTypeInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleTypeService.createArticleType(createArticleTypeInput);
        });
    }
    updateArticleType(updateArticleTypeInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleTypeService.updateArticleType(updateArticleTypeInput);
        });
    }
    deleteArticleType(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleTypeService.deleteArticleType(_id);
        });
    }
};
__decorate([
    graphql_1.Query(returns => [articleType_1.ArticleType]),
    __param(0, graphql_1.Args('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleTypeResolver.prototype, "getArticleTypeAll", null);
__decorate([
    graphql_1.Mutation(returns => articleType_1.ArticleType),
    __param(0, graphql_1.Args('createArticleTypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articleType_1.CreateArticleTypeInput]),
    __metadata("design:returntype", Promise)
], ArticleTypeResolver.prototype, "createArticleType", null);
__decorate([
    graphql_1.Mutation(returns => articleType_1.ArticleType),
    __param(0, graphql_1.Args('updateArticleTypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articleType_1.UpdateArticleTypeInput]),
    __metadata("design:returntype", Promise)
], ArticleTypeResolver.prototype, "updateArticleType", null);
__decorate([
    graphql_1.Mutation(returns => String),
    __param(0, graphql_1.Args('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleTypeResolver.prototype, "deleteArticleType", null);
ArticleTypeResolver = __decorate([
    graphql_1.Resolver(of => articleType_1.ArticleType),
    __metadata("design:paramtypes", [articleType_service_1.ArticleTypeService])
], ArticleTypeResolver);
exports.ArticleTypeResolver = ArticleTypeResolver;
;
//# sourceMappingURL=articleType.resolvers.js.map