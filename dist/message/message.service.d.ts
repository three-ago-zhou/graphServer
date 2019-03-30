import { Message, MessageAll } from '../graphql';
export declare class MessageService {
    private readonly messages;
    getMessageAll: (pageSize: number, page: number) => MessageAll;
    getMessage: (id: number) => Message;
    createMessage: (content: string, author: string) => Message;
    updateMessage: (id: number, content: string, author: string) => Message;
}
