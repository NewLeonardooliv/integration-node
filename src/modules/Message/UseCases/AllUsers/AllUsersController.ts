import { Controller } from '@core/infra/Controller';
import { AllUsersUseCase } from './AllUsersUseCase';
import { ok, fail } from '@core/infra/HttpResponse';

export class AllUsersController implements Controller {
	constructor(private allUsersUseCase: AllUsersUseCase) { }

	async handle() {
		try {
			const users = await this.allUsersUseCase.execute();

			return ok(users);
		} catch (error) {
			return fail(error);
		}
	}
}