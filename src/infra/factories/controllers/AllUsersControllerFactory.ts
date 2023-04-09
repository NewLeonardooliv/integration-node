import { SlackRepository } from '@modules/Message/Repositories/Implementations/SlackRepository';
import { AllUsersController } from '@modules/Message/UseCases/AllUsers/AllUsersController';
import { AllUsersUseCase } from '@modules/Message/UseCases/AllUsers/AllUsersUseCase';

const slackRepository = new SlackRepository();
const allUsersUseCase = new AllUsersUseCase(slackRepository);
const allUsersController = new AllUsersController(allUsersUseCase);

export { allUsersController };
