import { useAxios } from "../../../../helpers/useAxios";
import { Members, Users } from "../../Model/Slack";
import { IFindUserParams, IMensageParams, ISlackRepository } from "../ISlackRepository";

export class SlackRepository implements ISlackRepository {
    URL = process.env.SLACK_API;
    TOKEN = process.env.SLACK_TOKEN;
    TOKEN_XOXP = process.env.SLACK_TOKEN_XOXP;

    async sendMensage({ user, message }: IMensageParams) {
        const { data } = await useAxios({
            url: `${this.URL}/chat.postMessage`,
            method: 'POST',
            token: `Bearer ${this.TOKEN}`,
            data: {
                channel: user,
                text: message
            }
        })

        return data;
    }

    async getAllUsers(): Promise<Users> {
        const { data } = await useAxios({
            url: `${this.URL}/users.list`,
            method: 'GET',
            token: `Bearer ${this.TOKEN}`,
        })

        return data;
    }

    async getUserByNameOrId({ userName, userId }: IFindUserParams): Promise<boolean | Members> {
        const users = await this.getAllUsers();

        for (const user of users.members) {
            if (user.name == userName
                || user.real_name == userName
                || user.profile.display_name == userName
                || user.profile.real_name_normalized == userName
                || user.profile.real_name_normalized == userName
                || user.id == userId) {
                return user;
            }
        }

        return false;
    }
}