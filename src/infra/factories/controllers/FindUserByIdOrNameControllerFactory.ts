import { SlackRepository } from '@modules/Message/Repositories/Implementations/SlackRepository';
import { FindUserByIdOrNameController } from '@modules/Message/UseCases/UserByIdOrName/FindUserByIdOrNameController';
import { FindUserByIdOrNameUseCase } from '@modules/Message/UseCases/UserByIdOrName/findUserByIdOrNameUseCase';

const slackRepository = new SlackRepository();
const findUserByIdOrNameUseCase = new FindUserByIdOrNameUseCase(slackRepository);
const findUserByIdOrNameController = new FindUserByIdOrNameController(findUserByIdOrNameUseCase);

export { findUserByIdOrNameController };
