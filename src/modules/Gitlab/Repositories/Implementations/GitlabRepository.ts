import { useAxios } from "../../../../helpers/useAxios";
import { useFetch } from "../../../../helpers/useFetch";
import { Issues, Comment, Files, Projects } from "../../Model/Gitlab";
import {
  ICommentParams,
  IFileParams,
  IGitlabRepository,
  IIssueParams,
  ILabelIssueParams,
} from "../IGitlabRepository";

import fs from 'fs';
import * as fsp from 'node:fs/promises';
import FormData from "form-data";


export class GitlabRepository implements IGitlabRepository {
  URL = process.env.GITLAB_API;
  TOKEN = process.env.GITLAB_PASSWORD

  async newIssue({ project_id, title, description }: IIssueParams): Promise<Issues> {
    const data = await useFetch({
      url: `${this.URL}/projects/${project_id}/issues`,
      method: 'POST',
      token: `Bearer ${this.TOKEN}`,
      data: { title, description },
    });

    return data;
  }

  async editIssue({ project_id, issue_iid, title, description }: IIssueParams): Promise<Issues> {
    const data = await useFetch({
      url: `${this.URL}/projects/${project_id}/issues/${issue_iid}`,
      method: 'PUT',
      token: `Bearer ${this.TOKEN}`,
      data: { title, description },
    });

    return data;
  }

  async sendFile({ project_id, file }: IFileParams): Promise<Files> {
    const imageData = fs.readFileSync(file.path);

    const formData = new FormData();
    formData.append('file', imageData, { filename: file.filename });

    const { data } = await useAxios({
      url: `${this.URL}/projects/${project_id}/uploads`,
      method: 'POST',
      token: `Bearer ${this.TOKEN}`,
      contentType: 'multipart/form-data',
      data: formData,
    });

    fsp.unlink(file.path);

    return data
  }

  async updateLabelIssue({ project_id, issue_iid, labels }: ILabelIssueParams): Promise<Issues> {
    const data = await useFetch({
      url: `${this.URL}/projects/${project_id}/issues/${issue_iid}`,
      method: 'PUT',
      token: `Bearer ${this.TOKEN}`,
      data: { labels: labels },
    });

    return data;
  }

  validateLabel({ project_id, issue_iid, labels, }: ILabelIssueParams): boolean {
    const arLabels = [
      'Pausada',
      'Em progresso',
      'Refatoração',
      'Pronto para teste',
      'Com erro',
      'Em teste',
    ]

    return arLabels.includes(labels);
  }

  async commentOnIssue({ project_id, issue_iid, body }: ICommentParams): Promise<Comment> {
    const data = await useFetch({
      url: `${this.URL}/projects/${project_id}/issues/${issue_iid}/notes`,
      method: 'POST',
      token: `Bearer ${this.TOKEN}`,
      data: { body },
    });

    return data;
  }

  validateCreateNewIssue({ project_id, title, description }: IIssueParams): boolean {
    throw new Error("Method not implemented.");
  }

  validateUpdateNewIssue({ project_id, issue_iid, title, description, }: IIssueParams): boolean {
    throw new Error("Method not implemented.");
  }

  async searchOnGitLab(query: string) {
    const data = await useFetch({
      url: `${this.URL}/search?${query}`,
      method: 'GET',
      token: `Bearer ${this.TOKEN}`,
    });

    return data;
  }

  async createLabelsOnProject(project_id: number, labels: any[]): Promise<boolean> {
    try {
      labels.forEach(element => {
        useFetch({
          url: `${this.URL}/projects/${project_id}/labels`,
          method: 'POST',
          token: `Bearer ${this.TOKEN}`,
          data: element,
        });
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  getLabelsToCreate() {
    return [
      {
        id: 1,
        name: "Pausada",
        description: "Atividades que estão pausadas por motivos de espera ou por ocorrer problemas maiores.",
        description_html: "Atividades que estão pausadas por motivos de espera ou por ocorrer problemas maiores.",
        text_color: "#FFFFFF",
        color: "#6699cc"
      },
      {
        id: 2,
        name: "Em progresso",
        description: "Atividades que já estão em fase de desenvolvimento.",
        description_html: "Atividades que já estão em fase de desenvolvimento.",
        text_color: "#FFFFFF",
        color: "#009966"
      },
      {
        id: 3,
        name: "Refatoração",
        description: "Atividades que estão a espera de refatoração por outro profissional.",
        description_html: "Atividades que estão a espera de refatoração por outro profissional.",
        text_color: "#FFFFFF",
        color: "#00b140"
      },
      {
        id: 4,
        name: "Pronto para teste",
        description: "Atividades que estão prontas para serem testadas verificando se estão dentro dos requisitos exigidos sem nenhum problema.",
        description_html: "Atividades que estão prontas para serem testadas verificando se estão dentro dos requisitos exigidos sem nenhum problema.",
        text_color: "#FFFFFF",
        color: "#ed9121"
      },
      {
        id: 5,
        name: "Com erro",
        description: "Atividades que foram testadas e porém foi encontrado problemas ou erros.",
        description_html: "Atividades que foram testadas e porém foi encontrado problemas ou erros.",
        text_color: "#FFFFFF",
        color: "#dc143c"
      },
      {
        id: 6,
        name: "Em teste",
        description: "Atividades que já estão em processo de testes manuais.",
        description_html: "Atividades que já estão em processo de testes manuais.",
        text_color: "#FFFFFF",
        color: "#3cb371"
      },
    ]
  }

  async findProjectById(id_project: number): Promise<Projects> {
    const data = await useFetch({
      url: `${this.URL}/projects/${id_project}`,
      method: 'GET',
      token: `Bearer ${this.TOKEN}`,
    });

    return data;
  }

  async findIssueById(id_issue: number): Promise<Projects> {
    const data = await useFetch({
      url: `${this.URL}/issues/${id_issue}`,
      method: 'GET',
      token: `Bearer ${this.TOKEN}`,
    });

    return data;
  }
}
