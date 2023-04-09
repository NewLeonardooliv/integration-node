import { IIssuesRepository } from '@modules/Issues/Repositories/IGitlabRepository';

interface IRequest {
  projectId: number;
  issueId: number;
  title: string;
  description: string;
}

export class EditIssueUseCase {
	constructor(private gitlabRepository: IIssuesRepository) {}

	async execute({ projectId, issueId, title, description }: IRequest) {
		return await this.gitlabRepository.editIssue({
			projectId,
			issueId,
			title,
			description,
		});
	}
}
