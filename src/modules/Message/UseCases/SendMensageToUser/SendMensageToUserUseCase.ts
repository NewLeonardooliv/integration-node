import { IMessageRepository } from '../../Repositories/IMessageRepository';
import { MessageNotFoundError } from './errors/MessageNotFoundError';
import { UserNotFoundError } from './errors/UserNotFoundError';

interface IRequest {
    user: string;
    message: string;
}

export class SendMensageToUserUseCase {
	constructor(private slackRepository: IMessageRepository) { }

	async execute({ user, message }: IRequest) {

		if (!user) {
			throw new UserNotFoundError();
		}

		const userFind = await this.slackRepository.getUserByNameOrId({ userName: user });

		if (typeof userFind === 'boolean') {
			throw new UserNotFoundError();
		}

		if (!message) {
			throw new MessageNotFoundError();
		}

		const messageSended = this.slackRepository.sendMensage({ user: userFind.id, message });

		return messageSended;
	}
}