import { SlackRepository } from "../../../modules/Slack/Repositories/Implementations/SlackRepository";
import { SendMensageToUserController } from "../../../modules/Slack/UseCases/SendMensageToUser/SendMensageToUserController";
import { SendMensageToUserUseCase } from "../../../modules/Slack/UseCases/SendMensageToUser/SendMensageToUserUseCase";

const slackRepository = new SlackRepository();
const sendMensageToUserUseCase = new SendMensageToUserUseCase(slackRepository);
const sendMensageToUserController = new SendMensageToUserController(sendMensageToUserUseCase);

export { sendMensageToUserController };
