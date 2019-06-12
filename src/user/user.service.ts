import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { User, CreateUserInput, UpdateUserInput } from './models/user';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly UserRepository: MongoRepository<UserEntity>,
    ) {}

    async createUser (createUser: CreateUserInput): Promise<User> {
        const newUser = await this.UserRepository.save({
            ...createUser,
            articleTypeList: [],
            articleList: [],
        });
        return newUser;
    }

    async updateUser(updateUser: UpdateUserInput): Promise<User> {
        const _id = updateUser._id;
        delete updateUser._id;
        await this.UserRepository.update(_id, updateUser);
        return await this.UserRepository.findOne(updateUser._id);
    };

    async findUserByAccount(account: string): Promise<User> {
        return await this.UserRepository.findOne({
            where: {
                account: { "$regex": account }
            }
        });
    };

    async findUser (_id: string): Promise<User> {
        return await this.UserRepository.findOne(_id);
    }

    async findAllUser(): Promise<User[]> {
        return await this.UserRepository.find();
    }
}

