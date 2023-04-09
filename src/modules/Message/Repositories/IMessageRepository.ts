import { Members, Users } from '../Dtos/Slack';

export type IMessageRepository = {
    sendMensage({ user, message }: IMensageParams): any
    getAllUsers(): Promise<Users>
    getUserByNameOrId(params: IFindUserParams): Promise<boolean | Members>
}

export type IMensageParams = {
    user: string;
    message: string;
}

export type IFindUserParams = {
    userName?: string;
    userId?: string;
}