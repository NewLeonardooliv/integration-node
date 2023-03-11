import { IGitlabRepository } from "../../Repositories/IGitlabRepository";

interface IRequest {
  project_id: number;
  issue_iid: number;
  title: string;
  description: string;
}

export class EditIssueUseCase {
  constructor(private gitlabRepository: IGitlabRepository) {}

  async execute({ project_id, issue_iid, title, description }: IRequest) {
    return await this.gitlabRepository.editIssue({
      project_id,
      issue_iid,
      title,
      description,
    });
  }
}
