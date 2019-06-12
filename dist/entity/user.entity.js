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
const articleType_entity_1 = require("./articleType.entity");
const article_entity_1 = require("./article.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", typeorm_1.ObjectID)
], UserEntity.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "account", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "signature", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.OneToMany(type => articleType_entity_1.ArticleTypeEntity, article_type => article_type.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "articleTypeList", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.OneToMany(type => article_entity_1.ArticleEntity, article => article._id),
    __metadata("design:type", Array)
], UserEntity.prototype, "articleList", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map