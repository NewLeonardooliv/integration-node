import { ICommandsRepository, IScriptParams } from "../ICommandsRepository";
import childProcess from "child_process";

export class CommandsRepository implements ICommandsRepository {
    USER_DATABASE = process.env.DATABASE_SERVER_USER;
    PASSWORD_DATABASE = process.env.DATABASE_SERVER_PASSWORD;
    ADRESS_DATABASE = process.env.DATABASE_SERVER_ADRESS;

    USER_SOURCECODE = process.env.SOURCECODE_SERVER_USER
    PASSWORD_SOURCECODE = process.env.SOURCECODE_SERVER_PASSWORD
    ADRESS_LOCAL_SOURCECODE = process.env.SOURCECODE_LOCAL_SERVER_ADRESS;
    ADRESS_ONLINE_SOURCECODE = process.env.SOURCECODE_ONLINE_SERVER_ADRESS;

    updateDatabase(script: string): Promise<string> {
        return new Promise((resolve, reject) => {
            childProcess.exec(
                `ssh ${this.USER_SOURCECODE}@${this.ADRESS_ONLINE_SOURCECODE} "ssh ${this.USER_DATABASE}@${this.ADRESS_DATABASE} 'cat /opt/atualizacao_banco_dados/${script}'"`,
                (error, stdout) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(stdout.trim());
                    return;
                });
        });
    }

    getScriptDatabase(): any {
        return [
            {
                name: 'sisdiagro',
                script: 'atualizar_sisdiagro.sh',
            },
            {
                name: 'sigama',
                script: 'atualizar_sigama.sh',
            },
            {
                name: 'siagro',
                script: 'atualizar_siagro.sh',
            },
            {
                name: 'sidap',
                script: 'atualizar_sidap.sh',
            },
            {
                name: 'sidapi',
                script: 'atualizar_sidapi.sh',
            },
        ]
    }

    findScripByName({ scriptName, scripts }: IScriptParams): any {
        for (const script of scripts) {
            if (script.name === scriptName) {
                return script;
            }
        }

        return false;
    }
}