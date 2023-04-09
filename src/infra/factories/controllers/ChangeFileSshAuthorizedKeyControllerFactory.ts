import { CommandsRepository } from '@modules/Commands/Repositories/Implementations/CommandsRepository';
import { ChangeFileSshAuthorizedKeyController } from '@modules/Commands/UseCases/ChangeFileSshAuthorizedKey/ChangeFileSshAuthorizedKeyController';
import { ChangeFileSshAuthorizedKeyUseCase } from '@modules/Commands/UseCases/ChangeFileSshAuthorizedKey/ChangeFileSshAuthorizedKeyUseCase';

const commandsRepository = new CommandsRepository();
const changeFileSshAuthorizedKeyUseCase = new ChangeFileSshAuthorizedKeyUseCase(commandsRepository);
const changeFileSshAuthorizedKeyController = new ChangeFileSshAuthorizedKeyController(changeFileSshAuthorizedKeyUseCase);

export { changeFileSshAuthorizedKeyController };
