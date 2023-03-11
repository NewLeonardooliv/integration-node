import { Controller } from "../../../../core/infra/Controller";
import { NewIssueUseCase } from "./NewIssueUseCase";
import { created, fail } from "../../../../core/infra/HttpResponse";

interface NewIssueControllerRequest {
  project_id: number;
  title: string;
  description: string;
  file: any;
}

export class NewIssueController implements Controller {
  constructor(private newIssueUseCase: NewIssueUseCase) { }

  async handle({ project_id, title, description, file }: NewIssueControllerRequest) {
    try {
      const newIssue = await this.newIssueUseCase.execute({
        project_id,
        title,
        description,
        file,
      });

      return created(newIssue)
    } catch (error) {
      return fail(error)

    }
  }
}
