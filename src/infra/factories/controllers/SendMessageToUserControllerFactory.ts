import { SlackRepository } from '@modules/Message/Repositories/Implementations/SlackRepository';
import { SendMensageToUserController } from '@modules/Message/UseCases/SendMensageToUser/SendMensageToUserController';
import { SendMensageToUserUseCase } from '@modules/Message/UseCases/SendMensageToUser/SendMensageToUserUseCase';

const slackRepository = new SlackRepository();
const sendMensageToUserUseCase = new SendMensageToUserUseCase(slackRepository);
const sendMensageToUserController = new SendMensageToUserController(sendMensageToUserUseCase);

export { sendMensageToUserController };
