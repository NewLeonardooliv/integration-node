import { Controller } from "../../../../core/infra/Controller";
import { created, fail, notAllowed } from "../../../../core/infra/HttpResponse";
import { LabelNotFoundError } from "./errors/LabelNotFoundError";
import { UpdateLabelIssueUseCase } from "./UpdateLabelIssueUseCase";

interface UpdateLabelIssueControllerRequest {
	issue_iid: number;
	project_id: number;
	labels: string;
}

export class UpdateLabelIssueController implements Controller {
	constructor(private updateLabelIssueUseCase: UpdateLabelIssueUseCase) { }

	async handle({ issue_iid, project_id, labels }: UpdateLabelIssueControllerRequest) {
		try {
			const issueLabel = await this.updateLabelIssueUseCase.execute({ issue_iid, project_id, labels });

			if (!issueLabel) {
				return notAllowed(new LabelNotFoundError());
			}

			return created({
				response: 'Label alterada com sucesso',
				data: issueLabel
			})
		} catch (error) {
			return fail(error);
		}
	}
}