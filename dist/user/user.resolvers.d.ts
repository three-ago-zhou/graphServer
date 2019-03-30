import { User } from '../graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserResolvers {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<User[]>;
    findOneById(id: number): Promise<User>;
    create(args: CreateUserDto): Promise<User>;
    userCreated(): AsyncIterator<{}>;
}
