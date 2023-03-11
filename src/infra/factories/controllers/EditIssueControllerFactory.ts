import { GitlabRepository } from "../../../modules/Gitlab/Repositories/Implementations/GitlabRepository";
import { EditIssueController } from "../../../modules/Gitlab/UseCases/EditIssue/EditIssueController";
import { EditIssueUseCase } from "../../../modules/Gitlab/UseCases/EditIssue/EditIssueUseCase";


const gitlabRepository = new GitlabRepository();
const editIssueUseCase = new EditIssueUseCase(gitlabRepository);
const editIssueController = new EditIssueController(editIssueUseCase);

export { editIssueController };
