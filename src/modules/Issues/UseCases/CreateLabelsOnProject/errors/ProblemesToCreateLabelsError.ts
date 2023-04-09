import { UseCaseError } from '@core/domains/errors/UseCaseError';

export class ProblemesToCreateLabelsError extends Error implements UseCaseError {
	constructor() {
		super('Problems to create labels');
		this.name = 'ProblemesToCreateLabelsError';
	}
}