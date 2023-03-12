import { ICommandsRepository } from "../../Repositories/ICommandsRepository";
import { DatabaseNotFoundError } from "./errors/DatabaseNotFoundError";

interface IRequest {
    scriptDatabase: string
}

export class UpdateDatabaseUseCase {
    constructor(private commandsRepository: ICommandsRepository) { }

    async execute({ scriptDatabase }: IRequest) {
        const allScripts = this.commandsRepository.getScriptDatabase();

        const script = this.commandsRepository.findScripByName({
            scriptName: scriptDatabase,
            scripts: allScripts
        })

        if (!script) {
            throw new DatabaseNotFoundError();
        }

        return await this.commandsRepository.updateDatabase(script.script);
    }
}