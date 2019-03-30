import { MessageService } from "./message.service";
import { Message, MessageAll } from '../graphql';
export declare class MessageResolver {
    private readonly messageService;
    constructor(messageService: MessageService);
    getMessageAll(pageSize: number, page: number): Promise<MessageAll>;
    getMessage(id: number): Promise<Message>;
    createMessage(content: string, author: string): Promise<Message>;
    updateMessage(id: number, content: string, author: string): Promise<Message>;
}
