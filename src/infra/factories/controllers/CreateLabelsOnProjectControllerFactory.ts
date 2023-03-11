import { GitlabRepository } from "../../../modules/Gitlab/Repositories/Implementations/GitlabRepository";
import { CreateLabelsOnProjectController } from "../../../modules/Gitlab/UseCases/CreateLabelsOnProject/CreateLabelsOnProjectController";
import { CreateLabelsOnProjectUseCase } from "../../../modules/Gitlab/UseCases/CreateLabelsOnProject/CreateLabelsOnProjectUseCase";


const gitlabRepository = new GitlabRepository();
const createLabelsOnProjectUseCase = new CreateLabelsOnProjectUseCase(gitlabRepository);
const createLabelsOnProjectController = new CreateLabelsOnProjectController(createLabelsOnProjectUseCase);

export { createLabelsOnProjectController };
