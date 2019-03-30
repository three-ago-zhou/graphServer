import { HttpException } from "@nestjs/common";
export declare class ForbiddenException extends HttpException {
    constructor(error: any, status: any);
}
