import { User, UpdateUserInput, CreateUserInput } from './models/user';
import { UserService } from './user.service';
export declare class UserResolvers {
    private readonly userService;
    constructor(userService: UserService);
    findUser(_id: string): Promise<User>;
    findAllUser(): Promise<User[]>;
    findUserByAccount(account: string): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): Promise<User>;
    createUser(createUserInput: CreateUserInput): Promise<any>;
}
