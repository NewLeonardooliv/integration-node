import { SlackRepository } from "../../Repositories/Implementations/SlackRepository";

export class AllUsersUseCase {
    constructor(private slackRepository: SlackRepository) { }

    async execute() {
        const users = await this.slackRepository.getAllUsers();

        return users;
    }
}