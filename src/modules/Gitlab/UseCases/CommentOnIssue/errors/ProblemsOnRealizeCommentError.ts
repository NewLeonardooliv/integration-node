import { UseCaseError } from "../../../../../core/domains/errors/UseCaseError";

export class ProblemsOnRealizeCommentError extends Error implements UseCaseError {
    constructor() {
        super('Problems to realize comment')
        this.name = 'ProblemsOnRealizeCommentError'
    }
}