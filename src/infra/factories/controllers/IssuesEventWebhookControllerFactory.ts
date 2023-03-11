import { WebHookGitlabRepository } from "../../../modules/Gitlab/Repositories/Implementations/WebHookGitlabRepository";
import { IssuesEventWebhookController } from "../../../modules/Gitlab/UseCases/IssuesEventWebhook/IssuesEventWebhookController";
import { IssuesEventWebhookUseCase } from "../../../modules/Gitlab/UseCases/IssuesEventWebhook/IssuesEventWebhookUseCase";

const webHookRepository = new WebHookGitlabRepository();
const issuesEventWebhookUseCase = new IssuesEventWebhookUseCase(webHookRepository);
const issuesEventWebhookController = new IssuesEventWebhookController(issuesEventWebhookUseCase);

export { issuesEventWebhookController };
