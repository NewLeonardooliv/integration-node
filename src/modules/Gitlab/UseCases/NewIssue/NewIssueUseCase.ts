import { IGitlabRepository } from "../../Repositories/IGitlabRepository";
import { ProjectNotFoundError } from "./errors/ProjectNotFoundError";

interface IRequest {
  project_id: number;
  title: string;
  description: string;
  file?: any;
}

export class NewIssueUseCase {
  constructor(private gitlabRepository: IGitlabRepository) { }

  async execute({ project_id, title, description, file }: IRequest) {
    const project = await this.gitlabRepository.findProjectById(project_id);

    if (!project.id) {
      throw new ProjectNotFoundError();
    }

    if (file) {
      const responseFile = await this.gitlabRepository.sendFile({ project_id, file });

      description = `${description} \n ${responseFile.markdown}`
    }
    return this.gitlabRepository.newIssue({ project_id, title, description });
  }
}
