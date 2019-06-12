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
const user_1 = require("./models/user");
const user_guard_1 = require("./user.guard");
const user_service_1 = require("./user.service");
let UserResolvers = class UserResolvers {
    constructor(userService) {
        this.userService = userService;
    }
    findUser(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findUser(_id);
            if (!user) {
                throw new common_1.NotFoundException('无法查询到用户');
            }
            return user;
        });
    }
    findAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.findAllUser();
            return users;
        });
    }
    findUserByAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findUserByAccount(account);
            if (!user) {
                throw new common_1.NotFoundException('无法查询到用户');
            }
            return user;
        });
    }
    updateUser(updateUserInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findUser(updateUserInput._id);
            if (!user) {
                throw new common_1.NotFoundException('无法查询到用户');
            }
            return yield this.userService.updateUser(updateUserInput);
        });
    }
    createUser(createUserInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.createUser(createUserInput);
        });
    }
};
__decorate([
    graphql_1.Query(returns => user_1.User),
    common_1.UseGuards(user_guard_1.UserGuard),
    __param(0, graphql_1.Args('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "findUser", null);
__decorate([
    graphql_1.Query(returns => [user_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "findAllUser", null);
__decorate([
    graphql_1.Query(returns => user_1.User),
    __param(0, graphql_1.Args('account')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "findUserByAccount", null);
__decorate([
    graphql_1.Mutation(returns => user_1.User),
    __param(0, graphql_1.Args('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(returns => user_1.User),
    __param(0, graphql_1.Args('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "createUser", null);
UserResolvers = __decorate([
    graphql_1.Resolver(of => user_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolvers);
exports.UserResolvers = UserResolvers;
//# sourceMappingURL=user.resolvers.js.map