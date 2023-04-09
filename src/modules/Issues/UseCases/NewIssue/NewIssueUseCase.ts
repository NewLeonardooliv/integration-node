
import { IIssuesRepository } from '@modules/Issues/Repositories/IGitlabRepository';
import { ProjectNotFoundError } from './errors/ProjectNotFoundError';

interface IRequest {
  projectId: number;
  title: string;
  description: string;
  file?: any;
}

export class NewIssueUseCase {
	constructor(private gitlabRepository: IIssuesRepository) { }

	async execute({ projectId, title, description, file }: IRequest) {
		const project = await this.gitlabRepository.findProjectById(projectId);

		if (!project.id) {
			throw new ProjectNotFoundError();
		}

		if (file) {
			const responseFile = await this.gitlabRepository.sendFile({ projectId, file });

			description = `${description} \n ${responseFile.markdown}`;
		}
		return this.gitlabRepository.newIssue({ projectId, title, description });
	}
}
