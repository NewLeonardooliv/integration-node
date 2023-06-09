import { Controller } from '@core/infra/Controller';
import { created, fail, notAllowed } from '@core/infra/HttpResponse';
import { CreateLabelsOnProjectUseCase } from './CreateLabelsOnProjectUseCase';
import { ProblemesToCreateLabelsError } from './errors/ProblemesToCreateLabelsError';

export class CreateLabelsOnProjectController implements Controller {
	constructor(private createLabelsOnProjectUseCase: CreateLabelsOnProjectUseCase) { }

	async handle(projectId: number) {
		try {
			const createdLabels = await this.createLabelsOnProjectUseCase.execute(projectId);

			if (createdLabels) {
				return created({
					response: 'Labels criadas com sucesso',
				});
			}

			return notAllowed(new ProblemesToCreateLabelsError());
		} catch (error) {
			return fail(error);
		}
	}
}