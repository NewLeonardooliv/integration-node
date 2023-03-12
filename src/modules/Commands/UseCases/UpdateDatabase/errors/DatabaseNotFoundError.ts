import { UseCaseError } from "../../../../../core/domains/errors/UseCaseError";

export class DatabaseNotFoundError extends Error implements UseCaseError {
    constructor() {
        super('Database not found');
        this.name = 'DatabaseNotFoundError';
    }
}