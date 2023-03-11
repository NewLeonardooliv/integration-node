import { Members, Users } from "../Model/Slack";

export interface ISlackRepository {
    sendMensage({ user, message }: IMensageParams): any
    getAllUsers(): Promise<Users>
    getUserByNameOrId(params: IFindUserParams): Promise<boolean | Members>
}

export interface IMensageParams {
    user: string;
    message: string;
}

export interface IFindUserParams {
    userName?: string;
    userId?: string;
}