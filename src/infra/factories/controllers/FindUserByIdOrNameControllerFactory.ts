import { SlackRepository } from "../../../modules/Slack/Repositories/Implementations/SlackRepository";
import { FindUserByIdOrNameController } from "../../../modules/Slack/UseCases/UserByIdOrName/FindUserByIdOrNameController";
import { FindUserByIdOrNameUseCase } from "../../../modules/Slack/UseCases/UserByIdOrName/findUserByIdOrNameUseCase";

const slackRepository = new SlackRepository();
const findUserByIdOrNameUseCase = new FindUserByIdOrNameUseCase(slackRepository);
const findUserByIdOrNameController = new FindUserByIdOrNameController(findUserByIdOrNameUseCase);

export { findUserByIdOrNameController };
