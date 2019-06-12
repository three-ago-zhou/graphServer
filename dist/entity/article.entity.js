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
const user_entity_1 = require("./user.entity");
const articleType_entity_1 = require("./articleType.entity");
let ArticleEntity = class ArticleEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", typeorm_1.ObjectID)
], ArticleEntity.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ArticleEntity.prototype, "creationDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ArticleEntity.prototype, "updateDate", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], ArticleEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "links", void 0);
__decorate([
    typeorm_1.Column(type => user_entity_1.UserEntity),
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.articleList),
    __metadata("design:type", user_entity_1.UserEntity)
], ArticleEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => articleType_entity_1.ArticleTypeEntity, article_type => article_type._id),
    __metadata("design:type", typeorm_1.ObjectID)
], ArticleEntity.prototype, "articleType_id", void 0);
__decorate([
    typeorm_1.Column(type => articleType_entity_1.ArticleTypeEntity),
    typeorm_1.ManyToOne(type => articleType_entity_1.ArticleTypeEntity, article_type => article_type.articleList_id),
    __metadata("design:type", articleType_entity_1.ArticleTypeEntity)
], ArticleEntity.prototype, "articleType", void 0);
ArticleEntity = __decorate([
    typeorm_1.Entity('article')
], ArticleEntity);
exports.ArticleEntity = ArticleEntity;
//# sourceMappingURL=article.entity.js.map