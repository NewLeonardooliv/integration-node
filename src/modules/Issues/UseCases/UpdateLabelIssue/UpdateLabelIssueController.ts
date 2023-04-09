import { Controller } from '@core/infra/Controller';
import { created, fail, notAllowed } from '@core/infra/HttpResponse';
import { LabelNotFoundError } from './errors/LabelNotFoundError';
import { UpdateLabelIssueUseCase } from './UpdateLabelIssueUseCase';

interface UpdateLabelIssueControllerRequest {
	issueId: number;
	projectId: number;
	labels: string;
}

export class UpdateLabelIssueController implements Controller {
	constructor(private updateLabelIssueUseCase: UpdateLabelIssueUseCase) { }

	async handle({ issueId, projectId, labels }: UpdateLabelIssueControllerRequest) {
		try {
			const issueLabel = await this.updateLabelIssueUseCase.execute({ issueId, projectId, labels });

			if (!issueLabel) {
				return notAllowed(new LabelNotFoundError());
			}

			return created({
				response: 'Label alterada com sucesso',
				data: issueLabel
			});
		} catch (error) {
			return fail(error);
		}
	}
}