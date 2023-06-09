import { Controller } from '@core/infra/Controller';
import { NewIssueUseCase } from './NewIssueUseCase';
import { created, fail } from '@core/infra/HttpResponse';

interface NewIssueControllerRequest {
  projectId: number;
  title: string;
  description: string;
  file: any;
}

export class NewIssueController implements Controller {
	constructor(private newIssueUseCase: NewIssueUseCase) { }

	async handle({ projectId, title, description, file }: NewIssueControllerRequest) {
		try {
			const newIssue = await this.newIssueUseCase.execute({
				projectId,
				title,
				description,
				file,
			});

			return created(newIssue);
		} catch (error) {
			return fail(error);

		}
	}
}
