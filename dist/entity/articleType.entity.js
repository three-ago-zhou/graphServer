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
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("./user.entity");
const article_entity_1 = require("./article.entity");
let ArticleTypeEntity = class ArticleTypeEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", typeorm_1.ObjectID)
], ArticleTypeEntity.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 50),
    __metadata("design:type", String)
], ArticleTypeEntity.prototype, "articleType", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ArticleTypeEntity.prototype, "articleDate", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
    }),
    class_validator_1.Length(1, 100),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], ArticleTypeEntity.prototype, "articleIntroduce", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.UserEntity, user => user._id),
    __metadata("design:type", typeorm_1.ObjectID)
], ArticleTypeEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.articleTypeList),
    __metadata("design:type", user_entity_1.UserEntity)
], ArticleTypeEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => article_entity_1.ArticleEntity, article => article._id),
    __metadata("design:type", Array)
], ArticleTypeEntity.prototype, "articleList_id", void 0);
ArticleTypeEntity = __decorate([
    typeorm_1.Entity('article_type')
], ArticleTypeEntity);
exports.ArticleTypeEntity = ArticleTypeEntity;
//# sourceMappingURL=articleType.entity.js.map