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
const graphql_subscriptions_1 = require("graphql-subscriptions");
const user_guard_1 = require("./user.guard");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const pubSub = new graphql_subscriptions_1.PubSub();
let UserResolvers = class UserResolvers {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findAll();
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findOneById(id);
        });
    }
    create(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const createUser = yield this.userService.create(args);
            pubSub.publish('userCreated', { userCreated: createUser });
            return createUser;
        });
    }
    userCreated() {
        return pubSub.asyncIterator('userCreated');
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "getUsers", null);
__decorate([
    graphql_1.Query('user'),
    __param(0, graphql_1.Args('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "findOneById", null);
__decorate([
    graphql_1.Mutation('createUser'),
    __param(0, graphql_1.Args('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "create", null);
__decorate([
    graphql_1.Subscription('userCreated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolvers.prototype, "userCreated", null);
UserResolvers = __decorate([
    graphql_1.Resolver('User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolvers);
exports.UserResolvers = UserResolvers;
//# sourceMappingURL=user.resolvers.js.map