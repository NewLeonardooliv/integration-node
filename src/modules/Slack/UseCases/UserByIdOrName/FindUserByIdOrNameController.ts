import { Controller } from "../../../../core/infra/Controller";
import { FindUserByIdOrNameUseCase } from "./findUserByIdOrNameUseCase";
import { ok, fail } from "../../../../core/infra/HttpResponse";

interface findUserByIdOrNameControllerRequest {
    userName?: string;
    userId?: string;
}

export class FindUserByIdOrNameController implements Controller {
    constructor(private findUserByIdOrNameUseCase: FindUserByIdOrNameUseCase) { }

    async handle({ userId, userName }: findUserByIdOrNameControllerRequest) {
        try {
            const users = await this.findUserByIdOrNameUseCase.execute({ userId, userName });

            return ok(users);
        } catch (error) {
            return fail(error);
        }
    }
}