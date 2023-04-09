import { IMessageRepository } from '@modules/Message/Repositories/IMessageRepository';
import { NameOrIdNotFoundError } from './errors/NameOrIdNotFoundError';
import { UserNotFoundError } from './errors/UserNotFoundError';

interface IRequest {
    userName?: string;
    userId?: any;
}

export class FindUserByIdOrNameUseCase {
	constructor(private slackRepository: IMessageRepository) { }

	async execute({ userId, userName }: IRequest) {
		if (!userId && !userName) {
			throw new NameOrIdNotFoundError();
		}

		const users = await this.slackRepository.getUserByNameOrId({ userId, userName });

		if (!users) {
			throw new UserNotFoundError();
		}

		return users;
	}
}