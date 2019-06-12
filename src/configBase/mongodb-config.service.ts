import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';

@Injectable()
export class MongodbConfigService implements TypeOrmOptionsFactory {
    constructor() {}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        // if (process.env.NODE_ENV === 'development') {
        //     return {
        //         type: 'mongodb',
        //         host: '127.0.0.1',
        //         port: 5000,
        //         database: 'singleBog',
        //         entities: [ join(__dirname, '../entity/**.entity{.ts,.js}') ],
        //         synchronize: true,
        //         useNewUrlParser: true,
        //     }
        // }
        // return {
        //     type: 'mongodb',
        //     host: '127.0.0.1',
        //     port: 5000,
        //     database: 'singleBog',
        //     entities: [ join(__dirname, '../entity/**.entity{.ts,.js}') ],
        //     synchronize: true,
        //     useNewUrlParser: true,
        // }
        return {
            type: 'mongodb',
            host: '120.27.233.199',
            port: 27056,
            database: 'singleBog',
            username: 'singlebogdbzwh',
            password: 'zwh19941012',
            entities: [ join(__dirname, '../entity/**.entity{.ts,.js}') ],
            synchronize: true,
            useNewUrlParser: true,
        }
    };
};
