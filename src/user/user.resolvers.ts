import { UseGuards, NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UpdateUserInput, CreateUserInput } from './models/user';
import { UserGuard } from './user.guard';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolvers {
    constructor(private readonly userService: UserService) {}

    @Query(returns => User)
    @UseGuards(UserGuard)
    async findUser(@Args('_id') _id: string): Promise<User> {
        const user = await this.userService.findUser(_id);
        if (!user) {
            throw new NotFoundException('无法查询到用户');
        }
        return user;
    }

    @Query(returns => [User])
    async findAllUser(): Promise<User[]> {
        const users = await this.userService.findAllUser();
        return users;
    }

    @Query(returns => User)
    async findUserByAccount(@Args('account') account: string): Promise<User> {
        const user = await this.userService.findUserByAccount(account);
        if (!user) {
            throw new NotFoundException('无法查询到用户');
        }
        return user;
    }

    @Mutation(returns => User)
    async updateUser(
        @Args('updateUserInput') updateUserInput: UpdateUserInput,
    ): Promise<User> {
        const user = await this.userService.findUser(updateUserInput._id);
        if (!user) {
            throw new NotFoundException('无法查询到用户');
        }
        return await this.userService.updateUser(updateUserInput);
    }

    @Mutation(returns => User)
    async createUser(
        @Args('createUserInput') createUserInput: CreateUserInput,
    ): Promise<any> {
        return await this.userService.createUser(createUserInput);
    }
}

