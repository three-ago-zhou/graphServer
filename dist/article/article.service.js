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
const typeorm_1 = require("@nestjs/typeorm");
const article_entity_1 = require("../entity/article.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
const mongodb_1 = require("mongodb");
const articleType_entity_1 = require("../entity/articleType.entity");
let ArticleService = class ArticleService {
    constructor(ArticleRepository, UserRepository, ArticleTypeRepository) {
        this.ArticleRepository = ArticleRepository;
        this.UserRepository = UserRepository;
        this.ArticleTypeRepository = ArticleTypeRepository;
    }
    createArticle(newArticleInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.UserRepository.findOne(newArticleInput.user_id);
            delete user.articleTypeList;
            delete user.articleList;
            const articleType = yield this.ArticleTypeRepository.findOne(newArticleInput.articleType_id);
            delete articleType.user;
            delete articleType.user_id;
            delete articleType.articleList_id;
            delete newArticleInput.user_id;
            const insertArticle = Object.assign({ user,
                articleType }, newArticleInput);
            const newArticle = yield this.ArticleRepository.save(insertArticle);
            yield this.UserRepository.updateOne({ _id: mongodb_1.ObjectID(user._id) }, {
                $push: { 'articleList': newArticle._id }
            });
            yield this.ArticleTypeRepository.updateOne({ _id: mongodb_1.ObjectID(newArticleInput.articleType_id) }, {
                $push: { 'articleList_id': mongodb_1.ObjectID(newArticle._id) },
            });
            return newArticle;
        });
    }
    findOneByIdArticle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.ArticleRepository.findOne(id);
            return article;
        });
    }
    findArticleTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const articleArr = yield this.ArticleRepository.find({
                where: {
                    title: { "$regex": title }
                }
            });
            return articleArr;
        });
    }
    findArticleAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const articleArr = yield this.ArticleRepository.find();
            return articleArr;
        });
    }
    findArticleByArticleTypeId(_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const articleArr = yield this.ArticleRepository.find({
                where: {
                    articleType_id: { "$in": _ids },
                }
            });
            return articleArr;
        });
    }
    updateArticle(updateArticleInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const articleType = yield this.ArticleTypeRepository.findOne(updateArticleInput.articleType_id);
            delete articleType.user;
            delete articleType.user_id;
            delete articleType.articleList_id;
            const updateArticle = Object.assign({ articleType }, updateArticleInput);
            delete updateArticle._id;
            yield this.ArticleRepository.update(updateArticleInput._id, updateArticle);
            yield this.ArticleTypeRepository.updateOne({ _id: mongodb_1.ObjectID(updateArticleInput.articleType_id) }, {
                $pull: { 'articleList_id': mongodb_1.ObjectID(updateArticleInput._id) },
            });
            return yield this.ArticleRepository.findOne(updateArticleInput._id);
        });
    }
};
ArticleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(article_entity_1.ArticleEntity)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __param(2, typeorm_1.InjectRepository(articleType_entity_1.ArticleTypeEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        typeorm_2.MongoRepository,
        typeorm_2.MongoRepository])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map