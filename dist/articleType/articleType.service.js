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
const mongodb_1 = require("mongodb");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const articleType_entity_1 = require("../entity/articleType.entity");
const user_entity_1 = require("../entity/user.entity");
let ArticleTypeService = class ArticleTypeService {
    constructor(ArticleTypeRepository, UserRepository) {
        this.ArticleTypeRepository = ArticleTypeRepository;
        this.UserRepository = UserRepository;
    }
    getArticleTypeAll(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ArticleTypeRepository.find({ user_id: mongodb_1.ObjectID(user_id) });
        });
    }
    ;
    createArticleType(createArticleTypeInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.UserRepository.findOne(createArticleTypeInput.user_id);
            delete user.articleTypeList;
            delete user.articleList;
            const setDateArticleTypeInput = Object.assign({}, createArticleTypeInput, { user, user_id: mongodb_1.ObjectID(createArticleTypeInput.user_id), articleList_id: [] });
            const newCreateArticleType = yield this.ArticleTypeRepository.save(setDateArticleTypeInput);
            const createArticle = Object.assign({}, createArticleTypeInput, { _id: mongodb_1.ObjectID(newCreateArticleType._id) });
            delete createArticle.user_id;
            yield this.UserRepository.updateOne({ _id: mongodb_1.ObjectID(createArticleTypeInput.user_id) }, {
                $push: { 'articleTypeList': createArticle }
            });
            return newCreateArticleType;
        });
    }
    ;
    updateArticleType(updateArticleInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = updateArticleInput._id;
            delete updateArticleInput._id;
            yield this.ArticleTypeRepository.update(_id, updateArticleInput);
            return yield this.ArticleTypeRepository.findOne(updateArticleInput._id);
        });
    }
    ;
    deleteArticleType(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const articleTypeData = yield this.ArticleTypeRepository.findOne(_id);
            if (!articleTypeData) {
                throw new common_1.NotFoundException('无法查询到分类');
            }
            yield this.ArticleTypeRepository.remove(articleTypeData);
            return '删除成功';
        });
    }
    ;
};
ArticleTypeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(articleType_entity_1.ArticleTypeEntity)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        typeorm_2.MongoRepository])
], ArticleTypeService);
exports.ArticleTypeService = ArticleTypeService;
//# sourceMappingURL=articleType.service.js.map