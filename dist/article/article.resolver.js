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
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_server_express_1 = require("apollo-server-express");
const article_1 = require("./models/article");
const article_service_1 = require("./article.service");
const pubSub = new apollo_server_express_1.PubSub();
let ArticleResolver = class ArticleResolver {
    constructor(articleService) {
        this.articleService = articleService;
    }
    findOneByIdArticle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleService.findOneByIdArticle(id);
            if (!article) {
                throw new common_1.NotFoundException(id);
            }
            return article;
        });
    }
    findArticleTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.articleService.findArticleTitle(title);
            return articles;
        });
    }
    findArticleAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleService.findArticleAll();
        });
    }
    findArticleByArticleTypeId(_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleService.findArticleByArticleTypeId(_ids);
        });
    }
    createArticle(newArticleInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleService.createArticle(newArticleInput);
            pubSub.publish('articleAdded', { articleAdded: article });
            return article;
        });
    }
    updateArticle(updateArticleInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleService.updateArticle(updateArticleInput);
            return article;
        });
    }
    articleAdded() {
        return pubSub.asyncIterator('articleAdded');
    }
};
__decorate([
    graphql_1.Query(returns => article_1.Article),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "findOneByIdArticle", null);
__decorate([
    graphql_1.Query(returns => [article_1.Article]),
    __param(0, graphql_1.Args('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "findArticleTitle", null);
__decorate([
    graphql_1.Query(returns => [article_1.Article]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "findArticleAll", null);
__decorate([
    graphql_1.Query(returns => [article_1.Article]),
    __param(0, graphql_1.Args({ name: '_ids', type: () => [String] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "findArticleByArticleTypeId", null);
__decorate([
    graphql_1.Mutation(returns => article_1.Article),
    __param(0, graphql_1.Args('newArticleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_1.NewArticleInput]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "createArticle", null);
__decorate([
    graphql_1.Mutation(returns => article_1.Article),
    __param(0, graphql_1.Args('updateArticleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_1.UpdateArticleInput]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "updateArticle", null);
__decorate([
    graphql_1.Subscription(returns => article_1.Article),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticleResolver.prototype, "articleAdded", null);
ArticleResolver = __decorate([
    graphql_1.Resolver(of => article_1.Article),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleResolver);
exports.ArticleResolver = ArticleResolver;
//# sourceMappingURL=article.resolver.js.map