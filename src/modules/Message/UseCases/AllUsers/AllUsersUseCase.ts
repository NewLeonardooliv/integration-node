import { IMessageRepository } from '@modules/Message/Repositories/IMessageRepository';

export class AllUsersUseCase {
	constructor(private slackRepository: IMessageRepository) { }

	async execute() {
		const users = await this.slackRepository.getAllUsers();

		return users;
	}
}