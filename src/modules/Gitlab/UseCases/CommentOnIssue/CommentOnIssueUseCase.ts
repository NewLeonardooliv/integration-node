import { IGitlabRepository } from "../../Repositories/IGitlabRepository";

interface IRequest {
    project_id: number;
    issue_iid: number;
    body: string;
}

export class CommentOnIssueUseCase {
    constructor(private gitlabRepository: IGitlabRepository) { }

    async execute({ project_id, issue_iid, body }: IRequest) {
        return await this.gitlabRepository.commentOnIssue({ project_id, issue_iid, body });
    }

}