import { UseCaseError } from '@core/domains/errors/UseCaseError';

export class ProblemsToEditIssueError extends Error implements UseCaseError {
	constructor() {
		super('Problems to edit Issues');
		this.name = 'ProblemsToEditIssueError';
	}
}