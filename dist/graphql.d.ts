export declare class CreateUserInput {
    name?: string;
    age?: number;
}
export declare class Message {
    id?: number;
    content?: string;
    author?: string;
}
export declare class MessageAll {
    total?: number;
    messageArray?: Message[];
}
export declare abstract class IMutation {
    abstract createMessage(content?: string, author?: string): Message | Promise<Message>;
    abstract updateMessage(id: string, content?: string, author?: string): Message | Promise<Message>;
    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;
}
export declare abstract class IQuery {
    abstract getMessageAll(pageSize?: number, page?: number): MessageAll | Promise<MessageAll>;
    abstract getMessage(id: string): Message | Promise<Message>;
    abstract getUsers(): User[] | Promise<User[]>;
    abstract user(id: string): User | Promise<User>;
    abstract temp__(): boolean | Promise<boolean>;
}
export declare abstract class ISubscription {
    abstract userCreated(): User | Promise<User>;
}
export declare class User {
    id?: number;
    name?: string;
    age?: number;
}
