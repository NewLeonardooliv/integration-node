import { UseCaseError } from "../../../../../core/domains/errors/UseCaseError";

export class IssueNotFoundError extends Error implements UseCaseError {
    constructor() {
        super('Issue not found')
        this.name = 'IssueNotFoundError'
    }
}