import { IGitlabRepository } from "../../Repositories/IGitlabRepository";

export class CreateLabelsOnProjectUseCase {
	constructor(private gitlabRepository: IGitlabRepository) { }

	async execute(project_id: number) {
		const labels = this.gitlabRepository.getLabelsToCreate();
		if (labels) {
			if (await this.gitlabRepository.createLabelsOnProject(project_id, labels)) return true
		}

		return false
	}
}