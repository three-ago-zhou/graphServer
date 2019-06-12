import { MongoRepository } from 'typeorm';
import { User, CreateUserInput, UpdateUserInput } from './models/user';
import { UserEntity } from '../entity/user.entity';
export declare class UserService {
    private readonly UserRepository;
    constructor(UserRepository: MongoRepository<UserEntity>);
    createUser(createUser: CreateUserInput): Promise<User>;
    updateUser(updateUser: UpdateUserInput): Promise<User>;
    findUserByAccount(account: string): Promise<User>;
    findUser(_id: string): Promise<User>;
    findAllUser(): Promise<User[]>;
}
