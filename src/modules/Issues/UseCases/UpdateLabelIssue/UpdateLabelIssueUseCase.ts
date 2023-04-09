import { IIssuesRepository } from '@modules/Issues/Repositories/IGitlabRepository';

interface IRequest {
    projectId: number;
    issueId: number;
    labels: string;
}
export class UpdateLabelIssueUseCase {
	constructor(private gitlabRepository: IIssuesRepository) { }

	async execute({ projectId, issueId, labels }: IRequest) {
		if (!this.gitlabRepository.validateLabel({ projectId, issueId, labels })) {
			return false;
		}
		return await this.gitlabRepository.updateLabelIssue({ projectId, issueId, labels });
	}
}