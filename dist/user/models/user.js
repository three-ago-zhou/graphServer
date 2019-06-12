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
const articleType_1 = require("../../articleType/models/articleType");
let User = class User {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", typeorm_1.ObjectID)
], User.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "account", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "signature", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    type_graphql_1.Field(type => [articleType_1.ArticleType], {
        nullable: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "articleTypeList", void 0);
__decorate([
    type_graphql_1.Field(type => [type_graphql_1.ID]),
    __metadata("design:type", Array)
], User.prototype, "articleList", void 0);
User = __decorate([
    type_graphql_1.ObjectType()
], User);
exports.User = User;
let CreateUserInput = class CreateUserInput {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], CreateUserInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "account", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "avatar", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "signature", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "phone", void 0);
CreateUserInput = __decorate([
    type_graphql_1.InputType()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
let UpdateUserInput = class UpdateUserInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "account", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "avatar", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "signature", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({
        nullable: true,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "phone", void 0);
UpdateUserInput = __decorate([
    type_graphql_1.InputType()
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;
//# sourceMappingURL=user.js.map