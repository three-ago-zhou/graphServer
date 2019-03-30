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
const message_service_1 = require("./message.service");
const common_1 = require("@nestjs/common");
let MessageResolver = class MessageResolver {
    constructor(messageService) {
        this.messageService = messageService;
    }
    getMessageAll(pageSize, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageService.getMessageAll(pageSize, page);
        });
    }
    getMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageService.getMessage(id);
        });
    }
    createMessage(content, author) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageService.createMessage(content, author);
        });
    }
    updateMessage(id, content, author) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageService.updateMessage(id, content, author);
        });
    }
};
__decorate([
    graphql_1.Query('getMessageAll'),
    __param(0, graphql_1.Args('pageSize')),
    __param(1, graphql_1.Args('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessageAll", null);
__decorate([
    graphql_1.Query('getMessage'),
    __param(0, graphql_1.Args('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessage", null);
__decorate([
    graphql_1.Mutation('createMessage'),
    __param(0, graphql_1.Args('content')),
    __param(1, graphql_1.Args('author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "createMessage", null);
__decorate([
    graphql_1.Mutation('updateMessage'),
    __param(0, graphql_1.Args('id', common_1.ParseIntPipe)),
    __param(1, graphql_1.Args('content')),
    __param(2, graphql_1.Args('author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "updateMessage", null);
MessageResolver = __decorate([
    graphql_1.Resolver('Message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=message.resolvers.js.map