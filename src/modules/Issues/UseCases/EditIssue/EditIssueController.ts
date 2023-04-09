import { Controller } from '@core/infra/Controller';
import { created, notAllowed, fail } from '@core/infra/HttpResponse';
import { EditIssueUseCase } from './EditIssueUseCase';
import { ProblemsToEditIssueError } from './errors/ProblemsToEditIssueError';

interface EditIssueControllerRequest {
  projectId: number;
  issueId: number;
  title: string;
  description: string;
}

export class EditIssueController implements Controller {
	constructor(private updadteIssueUseCase: EditIssueUseCase) { }

	async handle({ projectId, issueId, title, description }: EditIssueControllerRequest) {
		try {
			const updatedIssue = await this.updadteIssueUseCase.execute({
				projectId,
				issueId,
				title,
				description,
			});

			if (updatedIssue.id) {
				return created({
					response: 'Issue alterada com sucesso',
					data: {
						issueId: updatedIssue.iid,
						projectId: updatedIssue.projectId,
						title: updatedIssue.title,
						description: updatedIssue.description,
						state: updatedIssue.state,
					},
				});
			}

			return notAllowed(new ProblemsToEditIssueError());
		} catch (error) {
			return fail(error);
		}

	}
}
