import { IIssuesRepository } from '@modules/Issues/Repositories/IGitlabRepository';

export class CreateLabelsOnProjectUseCase {
	constructor(private gitlabRepository: IIssuesRepository) { }

	async execute(projectId: number) {
		const labels = this.gitlabRepository.getLabelsToCreate();
		if (labels) {
			if (await this.gitlabRepository.createLabelsOnProject(projectId, labels)) return true;
		}

		return false;
	}
}