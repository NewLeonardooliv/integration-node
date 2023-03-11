import { Controller } from "../../../../core/infra/Controller";
import { created, notAllowed, fail } from "../../../../core/infra/HttpResponse";
import { EditIssueUseCase } from "./EditIssueUseCase";
import { ProblemsToEditIssueError } from "./errors/ProblemsToEditIssueError";

interface EditIssueControllerRequest {
  project_id: number;
  issue_iid: number;
  title: string;
  description: string;
}

export class EditIssueController implements Controller {
  constructor(private updadteIssueUseCase: EditIssueUseCase) { }

  async handle({ project_id, issue_iid, title, description }: EditIssueControllerRequest) {
    try {
      const updatedIssue = await this.updadteIssueUseCase.execute({
        project_id,
        issue_iid,
        title,
        description,
      });

      if (updatedIssue.id) {
        return created({
          response: "Issue alterada com sucesso",
          data: {
            issue_iid: updatedIssue.iid,
            project_id: updatedIssue.project_id,
            title: updatedIssue.title,
            description: updatedIssue.description,
            state: updatedIssue.state,
          },
        });
      }

      return notAllowed(new ProblemsToEditIssueError());
    } catch (error) {
      return fail(error)
    }

  }
}
