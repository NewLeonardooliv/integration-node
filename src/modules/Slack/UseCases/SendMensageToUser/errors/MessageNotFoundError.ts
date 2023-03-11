import { UseCaseError } from "../../../../../core/domains/errors/UseCaseError";

export class MessageNotFoundError extends Error implements UseCaseError {
    constructor() {
        super('Message not found');
        this.name = 'MessageNotFoundError';
    }
}