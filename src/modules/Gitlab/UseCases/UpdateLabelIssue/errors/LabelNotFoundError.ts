import { UseCaseError } from "../../../../../core/domains/errors/UseCaseError";

export class LabelNotFoundError extends Error implements UseCaseError {
    constructor() {
        super(`Label not found`)
        this.name = 'LabelNotFoundError'
    }
}