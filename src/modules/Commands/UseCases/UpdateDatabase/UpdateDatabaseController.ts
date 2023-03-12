import { Controller } from "../../../../core/infra/Controller";
import { fail, ok } from "../../../../core/infra/HttpResponse";
import { UpdateDatabaseUseCase } from "./UpdateDatabaseUseCase";

interface UpdateDatabaseControllerResquest {
    script: string;
}

export class UpdateDatabaseController implements Controller {
    constructor(
        private updateDatabaseUseCase: UpdateDatabaseUseCase
    ) { }

    async handle({ script }: UpdateDatabaseControllerResquest) {
        try {
            const updated = await this.updateDatabaseUseCase.execute({ scriptDatabase: script });

            return ok(updated);

        } catch (error) {
            return fail(error);
        }
    }

}