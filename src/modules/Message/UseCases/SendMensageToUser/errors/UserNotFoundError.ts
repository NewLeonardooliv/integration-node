import { UseCaseError } from '@core/domains/errors/UseCaseError';

export class UserNotFoundError extends Error implements UseCaseError {
	constructor() {
		super('User not found');
		this.name = 'UserNotFoundError';
	}
}