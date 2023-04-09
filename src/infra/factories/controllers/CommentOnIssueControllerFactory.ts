import { GitlabRepository } from '@modules/Issues/Repositories/Implementations/GitlabRepository';
import { CommentOnIssueController } from '@modules/Issues/UseCases/CommentOnIssue/CommentOnIssueController';
import { CommentOnIssueUseCase } from '@modules/Issues/UseCases/CommentOnIssue/CommentOnIssueUseCase';

const gitlabRepository = new GitlabRepository();
const commentOnIssueUseCase = new CommentOnIssueUseCase(gitlabRepository);
const commentOnIssueController = new CommentOnIssueController(commentOnIssueUseCase);

export { commentOnIssueController };
