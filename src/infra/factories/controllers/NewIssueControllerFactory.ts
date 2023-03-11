import { GitlabRepository } from "../../../modules/Gitlab/Repositories/Implementations/GitlabRepository";
import { NewIssueController } from "../../../modules/Gitlab/UseCases/NewIssue/NewIssueController";
import { NewIssueUseCase } from "../../../modules/Gitlab/UseCases/NewIssue/NewIssueUseCase";

const gitlabRepository = new GitlabRepository();
const newIssueUseCase = new NewIssueUseCase(gitlabRepository);
const newIssueController = new NewIssueController(newIssueUseCase);

export { newIssueController };
