import { GitlabRepository } from '@modules/Issues/Repositories/Implementations/GitlabRepository';
import { UpdateLabelIssueController } from '@modules/Issues/UseCases/UpdateLabelIssue/UpdateLabelIssueController';
import { UpdateLabelIssueUseCase } from '@modules/Issues/UseCases/UpdateLabelIssue/UpdateLabelIssueUseCase';

const gitlabRepository = new GitlabRepository();
const updateLabelIssueUseCase = new UpdateLabelIssueUseCase(gitlabRepository);
const updateLabelIssueController = new UpdateLabelIssueController(updateLabelIssueUseCase);

export { updateLabelIssueController };
