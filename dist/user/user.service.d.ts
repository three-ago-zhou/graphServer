import { User, CreateUserInput } from '../graphql';
export declare class UserService {
    private readonly users;
    create(user: CreateUserInput): User;
    findAll(): User[];
    findOneById(id: number): User;
}
