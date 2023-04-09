import { Issues, Comment, Files, Projects } from '../Dtos/Gitlab';

export interface IIssuesRepository {
  newIssue(params: IIssueParams): Promise<Issues>;
  editIssue(params: IIssueParams): Promise<Issues>;
  updateLabelIssue(params: ILabelIssueParams): Promise<Issues>;
  commentOnIssue(params: ICommentParams): Promise<Comment>;
  sendFile(params: IFileParams): Promise<Files>;
  searchByQuery(query: string): any;
  createLabelsOnProject(projectId: number, labels: ILabelParams[]): Promise<boolean>;
  getLabelsToCreate(): ILabelResult[];
  validateCreateNewIssue(): boolean;
  validateUpdateNewIssue(): boolean;
  validateLabel(labels: string): boolean;
  findProjectById(id_project: number): Promise<Projects>;
  findIssueById(id_issue: number): Promise<Projects>;
}

export type ICommentParams = {
  projectId: number;
  issueId: number;
  body: string;
}

export type ILabelResult = {
  id: number;
  name: string;
  description: string;
  descriptionHtml: string;
  textColor: string;
  color: string;
}

export type ILabelParams = {
  id: number;
  name: string;
  description: string;
  descriptionHtml: string;
  textColor: string;
  color: string;
}

export type IIssueParams = {
  projectId: number;
  issueId?: number;
  title: string;
  description: string;
  labels?: string;
}

export type ILabelIssueParams = {
  projectId: number;
  issueId: number;
  labels: string;
}

export type IFileParams = {
  projectId: number;
  file: any;
}
