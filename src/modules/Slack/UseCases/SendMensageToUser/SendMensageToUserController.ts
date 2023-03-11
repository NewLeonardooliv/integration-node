import { Controller } from "../../../../core/infra/Controller";
import { ok, fail } from "../../../../core/infra/HttpResponse";
import { SendMensageToUserUseCase } from "./SendMensageToUserUseCase";

interface SendMensageToUserControllerRequest {
    user: string;
    message: string;
}

export class SendMensageToUserController implements Controller {
    constructor(private sendMensageToUserUseCase: SendMensageToUserUseCase) { }
    async handle({ user, message }: SendMensageToUserControllerRequest) {
        try {
            const messageSended = await this.sendMensageToUserUseCase.execute({ user, message });

            return ok(messageSended);
        } catch (error) {
            return fail(error)
        }
    }


}