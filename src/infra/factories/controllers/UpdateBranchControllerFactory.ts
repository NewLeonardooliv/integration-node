import { UpdateBranchController } from '@modules/Commands/UseCases/UpdateBranch/UpdateBranchController';
import { UpdateBranchUseCase } from '@modules/Commands/UseCases/UpdateBranch/UpdateBranchUseCase';
import { CommandsRepository } from '@modules/Commands/Repositories/Implementations/CommandsRepository';

const commandsRepository = new CommandsRepository();
const updateBranchUseCase = new UpdateBranchUseCase(commandsRepository);
const updateBranchController = new UpdateBranchController(updateBranchUseCase);

export { updateBranchController };