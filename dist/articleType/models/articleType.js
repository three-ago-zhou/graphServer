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
let ArticleType = class ArticleType {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: "文章类型id"
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], ArticleType.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.Length(1, 50),
    __metadata("design:type", String)
], ArticleType.prototype, "articleType", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], ArticleType.prototype, "articleDate", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
        description: "文章类型简介",
    }),
    class_validator_1.IsOptional(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], ArticleType.prototype, "articleIntroduce", void 0);
__decorate([
    type_graphql_1.Field(type => [type_graphql_1.ID]),
    __metadata("design:type", Array)
], ArticleType.prototype, "articleList_id", void 0);
__decorate([
    type_graphql_1.Field(type => user_1.User),
    __metadata("design:type", user_1.User)
], ArticleType.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", typeorm_1.ObjectID)
], ArticleType.prototype, "user_id", void 0);
ArticleType = __decorate([
    type_graphql_1.ObjectType()
], ArticleType);
exports.ArticleType = ArticleType;
let CreateArticleTypeInput = class CreateArticleTypeInput {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 50),
    __metadata("design:type", String)
], CreateArticleTypeInput.prototype, "articleType", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], CreateArticleTypeInput.prototype, "articleDate", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
        description: "文章类型简介",
    }),
    class_validator_1.IsOptional(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], CreateArticleTypeInput.prototype, "articleIntroduce", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: '用户id'
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], CreateArticleTypeInput.prototype, "user_id", void 0);
CreateArticleTypeInput = __decorate([
    type_graphql_1.InputType()
], CreateArticleTypeInput);
exports.CreateArticleTypeInput = CreateArticleTypeInput;
let UpdateArticleTypeInput = class UpdateArticleTypeInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID, {
        description: "文章类型id"
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], UpdateArticleTypeInput.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.Length(1, 50),
    __metadata("design:type", String)
], UpdateArticleTypeInput.prototype, "articleType", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
        description: "文章类型简介",
    }),
    class_validator_1.IsOptional(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UpdateArticleTypeInput.prototype, "articleIntroduce", void 0);
UpdateArticleTypeInput = __decorate([
    type_graphql_1.InputType()
], UpdateArticleTypeInput);
exports.UpdateArticleTypeInput = UpdateArticleTypeInput;
//# sourceMappingURL=articleType.js.map