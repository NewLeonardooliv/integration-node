import { IssuesEventWebhookUseCase } from "./IssuesEventWebhookUseCase";
import { Controller } from "../../../../core/infra/Controller";
import { ok } from "../../../../core/infra/HttpResponse";

interface IssuesEventWebhookControllerRequest {
	object_kind: string;
	event_type: string;
	user: {};
	project: {};
	object_attributes: {};
	labels: {};
	changes: {};
	repository: {};
}

export class IssuesEventWebhookController implements Controller {
	constructor(private issuesEventWebhookUseCase: IssuesEventWebhookUseCase) { }

	async handle({ object_kind, event_type, user, project, object_attributes, labels, changes, repository }: IssuesEventWebhookControllerRequest) {
		this.issuesEventWebhookUseCase.execute();
		return ok()
	}
}