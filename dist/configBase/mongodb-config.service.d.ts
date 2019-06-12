import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare class MongodbConfigService implements TypeOrmOptionsFactory {
    constructor();
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
