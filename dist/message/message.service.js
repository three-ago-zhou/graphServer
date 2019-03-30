"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let MessageService = class MessageService {
    constructor() {
        this.messages = [
            { id: 1, content: 'content', author: 'author' },
            { id: 2, content: 'content', author: 'author' },
            { id: 3, content: 'content', author: 'author' },
            { id: 4, content: 'content', author: 'author' },
            { id: 5, content: 'content', author: 'author' },
            { id: 6, content: 'content', author: 'author' },
            { id: 7, content: 'content', author: 'author' },
            { id: 8, content: 'content', author: 'author' },
            { id: 9, content: 'content', author: 'author' },
            { id: 10, content: 'content', author: 'author' },
            { id: 11, content: 'content', author: 'author' },
        ];
        this.getMessageAll = (pageSize, page) => {
            const total = this.messages.length;
            const startIndex = (page === 1 ? 0 : page - 1) * pageSize;
            const endIndex = pageSize * page;
            const messageArray = this.messages.slice(startIndex, endIndex);
            return {
                total,
                messageArray,
            };
        };
        this.getMessage = (id) => {
            return this.messages.find(message => message.id === id);
        };
        this.createMessage = (content, author) => {
            const id = this.messages.length + 1;
            const message = {
                id,
                content,
                author,
            };
            console.log(message);
            this.messages.push(message);
            return message;
        };
        this.updateMessage = (id, content, author) => {
            for (let i = 0; i < this.messages.length; i++) {
                if (this.messages[i].id === id) {
                    this.messages[i] = {
                        id,
                        content,
                        author,
                    };
                    break;
                }
            }
            return this.messages.find(message => message.id === id);
        };
    }
};
MessageService = __decorate([
    common_1.Injectable()
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map