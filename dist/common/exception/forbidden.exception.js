"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ForbiddenException extends common_1.HttpException {
    constructor(error, status) {
        super(error, status);
    }
}
exports.ForbiddenException = ForbiddenException;
//# sourceMappingURL=forbidden.exception.js.map