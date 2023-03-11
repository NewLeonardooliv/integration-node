import { SlackRepository } from "../../../modules/Slack/Repositories/Implementations/SlackRepository";
import { AllUsersController } from "../../../modules/Slack/UseCases/AllUsers/AllUsersController";
import { AllUsersUseCase } from "../../../modules/Slack/UseCases/AllUsers/AllUsersUseCase";

const slackRepository = new SlackRepository();
const allUsersUseCase = new AllUsersUseCase(slackRepository);
const allUsersController = new AllUsersController(allUsersUseCase);

export { allUsersController };
