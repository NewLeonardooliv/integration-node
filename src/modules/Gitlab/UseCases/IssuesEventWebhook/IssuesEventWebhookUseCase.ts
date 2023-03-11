import { IWebHookGitlabRepository } from "../../Repositories/IWebHookGitlabRepository";

export class IssuesEventWebhookUseCase {
	constructor(private webHookRepository: IWebHookGitlabRepository) { }

	async execute() {
		
	}
}