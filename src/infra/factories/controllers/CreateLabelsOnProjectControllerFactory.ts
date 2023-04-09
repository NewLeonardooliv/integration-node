import { GitlabRepository } from '@modules/Issues/Repositories/Implementations/GitlabRepository';
import { CreateLabelsOnProjectController } from '@modules/Issues/UseCases/CreateLabelsOnProject/CreateLabelsOnProjectController';
import { CreateLabelsOnProjectUseCase } from '@modules/Issues/UseCases/CreateLabelsOnProject/CreateLabelsOnProjectUseCase';


const gitlabRepository = new GitlabRepository();
const createLabelsOnProjectUseCase = new CreateLabelsOnProjectUseCase(gitlabRepository);
const createLabelsOnProjectController = new CreateLabelsOnProjectController(createLabelsOnProjectUseCase);

export { createLabelsOnProjectController };
