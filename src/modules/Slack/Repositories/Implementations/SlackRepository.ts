import { ISlackRepository } from "../ISlackRepository";

export class SlackRepository implements ISlackRepository {
    URL = process.env.SLACK_API;
    TOKEN = process.env.SLACK_TOKEN;
    TOKEN_XOXP = process.env.SLACK_TOKEN_XOXP;
}