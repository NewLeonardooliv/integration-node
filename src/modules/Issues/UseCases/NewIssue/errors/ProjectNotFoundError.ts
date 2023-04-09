import { UseCaseError } from '@core/domains/errors/UseCaseError';

export class ProjectNotFoundError extends Error implements UseCaseError {
	constructor() {
		super('Project not found');
		this.name = 'ProjectNotFoundError';
	}
}