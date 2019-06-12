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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const user_1 = require("../../user/models/user");
const articleType_1 = require("../../articleType/models/articleType");
let Article = class Article {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: '文章id',
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], Article.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Article.prototype, "creationDate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Article.prototype, "updateDate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => [String], {
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Article.prototype, "links", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", typeorm_1.ObjectID)
], Article.prototype, "articleType_id", void 0);
__decorate([
    type_graphql_1.Field(type => user_1.User),
    __metadata("design:type", user_1.User)
], Article.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(type => articleType_1.ArticleType, {
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", articleType_1.ArticleType)
], Article.prototype, "articleType", void 0);
Article = __decorate([
    type_graphql_1.ObjectType()
], Article);
exports.Article = Article;
let NewArticleInput = class NewArticleInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: '文章类型ID'
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], NewArticleInput.prototype, "articleType_id", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: '用户ID',
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], NewArticleInput.prototype, "user_id", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], NewArticleInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(30, 255),
    __metadata("design:type", String)
], NewArticleInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => [String], {
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], NewArticleInput.prototype, "links", void 0);
NewArticleInput = __decorate([
    type_graphql_1.InputType()
], NewArticleInput);
exports.NewArticleInput = NewArticleInput;
let UpdateArticleInput = class UpdateArticleInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: '文章id',
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], UpdateArticleInput.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: '文章类型ID'
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], UpdateArticleInput.prototype, "articleType_id", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UpdateArticleInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateArticleInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => [String], {
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], UpdateArticleInput.prototype, "links", void 0);
UpdateArticleInput = __decorate([
    type_graphql_1.InputType()
], UpdateArticleInput);
exports.UpdateArticleInput = UpdateArticleInput;
//# sourceMappingURL=article.js.map