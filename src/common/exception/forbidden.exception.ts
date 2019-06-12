import { HttpException } from "@nestjs/common";

export class ForbiddenException extends HttpException {
    constructor(error, status) {
        super(error, status);
    }
}