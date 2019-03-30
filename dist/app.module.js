"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const core_1 = require("@nestjs/core");
const http_exception_filter_1 = require("./common/exception/http-exception.filter");
const logging_interceptor_1 = require("./common/interceptor/logging.interceptor");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_module_1 = require("./user/user.module");
const message_module_1 = require("./message/message.module");
const path_1 = require("path");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .with('AppModule')
            .forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            message_module_1.MessageModule,
            user_module_1.UserModule,
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                installSubscriptionHandlers: true,
                definitions: {
                    path: path_1.join(process.cwd(), 'src/graphql.ts'),
                    outputAs: 'class',
                },
            }),
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map