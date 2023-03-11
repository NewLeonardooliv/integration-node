import { IGitlabRepository } from "../../Repositories/IGitlabRepository";

interface IRequest {
    project_id: number;
    issue_iid: number;
    labels: string;
}
export class UpdateLabelIssueUseCase {
    constructor(private gitlabRepository: IGitlabRepository) { }

    async execute({ project_id, issue_iid, labels }: IRequest) {
        if (!this.gitlabRepository.validateLabel({ project_id, issue_iid, labels })) {
            return false
        }
        return await this.gitlabRepository.updateLabelIssue({ project_id, issue_iid, labels });
    }
}