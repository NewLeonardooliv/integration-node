import { GitlabRepository } from "../../../modules/Gitlab/Repositories/Implementations/GitlabRepository";
import { CommentOnIssueController } from "../../../modules/Gitlab/UseCases/CommentOnIssue/CommentOnIssueController";
import { CommentOnIssueUseCase } from "../../../modules/Gitlab/UseCases/CommentOnIssue/CommentOnIssueUseCase";

const gitlabRepository = new GitlabRepository();
const commentOnIssueUseCase = new CommentOnIssueUseCase(gitlabRepository);
const commentOnIssueController = new CommentOnIssueController(commentOnIssueUseCase);

export { commentOnIssueController };
