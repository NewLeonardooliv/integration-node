import { UseCaseError } from '@core/domains/errors/UseCaseError';

export class NameOrIdNotFoundError extends Error implements UseCaseError {
	constructor() {
		super('Name or Id not found');
		this.name = 'UserNotFoundError';
	}
}