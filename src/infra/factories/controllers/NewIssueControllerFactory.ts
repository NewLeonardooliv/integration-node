import { GitlabRepository } from '@modules/Issues/Repositories/Implementations/GitlabRepository';
import { NewIssueController } from '@modules/Issues/UseCases/NewIssue/NewIssueController';
import { NewIssueUseCase } from '@modules/Issues/UseCases/NewIssue/NewIssueUseCase';

const gitlabRepository = new GitlabRepository();
const newIssueUseCase = new NewIssueUseCase(gitlabRepository);
const newIssueController = new NewIssueController(newIssueUseCase);

export { newIssueController };
