import { SlackRepository } from "../../Repositories/Implementations/SlackRepository";
import { UserNotFoundError } from "./errors/UserNotFoundError";

interface IRequest {
    userName?: string;
    userId?: any;
}

export class FindUserByIdOrNameUseCase {
    constructor(private slackRepository: SlackRepository) { }

    async execute({ userId, userName }: IRequest) {
        const users = await this.slackRepository.getUserByNameOrId({ userId, userName });

        if (!users) {
            throw new UserNotFoundError();
        }

        return users;
    }
}