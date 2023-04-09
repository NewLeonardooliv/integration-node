import { Controller } from '@core/infra/Controller';
import { created, fail, notAllowed } from '@core/infra/HttpResponse';
import { CommentOnIssueUseCase } from './CommentOnIssueUseCase';
import { ProblemsOnRealizeCommentError } from './errors/ProblemsOnRealizeCommentError';

interface CommentOnIssueControllerRequest {
	projectId: number;
	issueId: number;
	comment: string;
}
export class CommentOnIssueController implements Controller {
	constructor(private commentOnIssueUseCase: CommentOnIssueUseCase) { }

	async handle({ projectId, issueId, comment }: CommentOnIssueControllerRequest) {
		try {
			const commentedIssue = await this.commentOnIssueUseCase.execute({ projectId, issueId: issueId, body: comment });

			if (commentedIssue.id) {
				return created({
					response: 'Comentario realizado com sucesso',
					data: {
						comment_id: commentedIssue.id,
						comment: commentedIssue.body,
						created_at: commentedIssue.created_at,
					}
				});
			}

			return notAllowed(new ProblemsOnRealizeCommentError());
		} catch (error) {
			return fail(error);
		}

	}
}