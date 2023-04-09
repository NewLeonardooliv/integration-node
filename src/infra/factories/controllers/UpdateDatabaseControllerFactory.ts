import { CommandsRepository } from '@modules/Commands/Repositories/Implementations/CommandsRepository';
import { UpdateDatabaseController } from '@modules/Commands/UseCases/UpdateDatabase/UpdateDatabaseController';
import { UpdateDatabaseUseCase } from '@modules/Commands/UseCases/UpdateDatabase/UpdateDatabaseUseCase';

const commandsRepository = new CommandsRepository();
const updateDatabaseUseCase = new UpdateDatabaseUseCase(commandsRepository);
const updateDatabaseController = new UpdateDatabaseController(updateDatabaseUseCase);

export { updateDatabaseController };