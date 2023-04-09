import { GitlabRepository } from '@modules/Issues/Repositories/Implementations/GitlabRepository';
import { EditIssueController } from '@modules/Issues/UseCases/EditIssue/EditIssueController';
import { EditIssueUseCase } from '@modules/Issues/UseCases/EditIssue/EditIssueUseCase';


const gitlabRepository = new GitlabRepository();
const editIssueUseCase = new EditIssueUseCase(gitlabRepository);
const editIssueController = new EditIssueController(editIssueUseCase);

export { editIssueController };
