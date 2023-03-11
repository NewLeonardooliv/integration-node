import { GitlabRepository } from "../../../modules/Gitlab/Repositories/Implementations/GitlabRepository";
import { UpdateLabelIssueController } from "../../../modules/Gitlab/UseCases/UpdateLabelIssue/UpdateLabelIssueController";
import { UpdateLabelIssueUseCase } from "../../../modules/Gitlab/UseCases/UpdateLabelIssue/UpdateLabelIssueUseCase";

const gitlabRepository = new GitlabRepository();
const updateLabelIssueUseCase = new UpdateLabelIssueUseCase(gitlabRepository);
const updateLabelIssueController = new UpdateLabelIssueController(updateLabelIssueUseCase);

export { updateLabelIssueController };
