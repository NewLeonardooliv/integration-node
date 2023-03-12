export interface ICommandsRepository {
    updateDatabase(script: string): Promise<string>
    getScriptDatabase(): any
    findScripByName({ scriptName, scripts }: IScriptParams): any
}

export interface IScriptParams {
    scriptName: string
    scripts: IScript[]
}

export interface IScript {
    name: string;
    script: string;
}