import { IIssuesRepository } from '@modules/Issues/Repositories/IGitlabRepository';

interface IRequest {
    projectId: number;
    issueId: number;
    body: string;
}

export class CommentOnIssueUseCase {
	constructor(private gitlabRepository: IIssuesRepository) { }

	async execute({ projectId, issueId, body }: IRequest) {
		return await this.gitlabRepository.commentOnIssue({ projectId, issueId, body });
	}

}