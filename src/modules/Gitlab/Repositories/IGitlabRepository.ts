import { Issues, Comment, Files, Projects } from "../Model/Gitlab";

export interface IGitlabRepository {
  newIssue(params: IIssueParams): Promise<Issues>;
  editIssue(params: IIssueParams): Promise<Issues>;
  updateLabelIssue(params: ILabelIssueParams): Promise<Issues>;
  commentOnIssue(params: ICommentParams): Promise<Comment>;
  sendFile(params: IFileParams): Promise<Files>;
  searchOnGitLab(query: string): any;
  createLabelsOnProject(project_id: number, labels: ILabelParams[]): Promise<boolean>;
  getLabelsToCreate(): ILabelResult[];
  validateCreateNewIssue(params: IIssueParams): boolean;
  validateUpdateNewIssue(params: IIssueParams): boolean;
  validateLabel(params: ILabelIssueParams): boolean;
  findProjectById(id_project: number): Promise<Projects>;
  findIssueById(id_issue: number): Promise<Projects>;
}

export interface ICommentParams {
  project_id: number;
  issue_iid: number;
  body: string;
}

export interface ILabelResult {
  id: number;
  name: string;
  description: string;
  description_html: string;
  text_color: string;
  color: string;
}

export interface ILabelParams {
  id: number;
  name: string;
  description: string;
  description_html: string;
  text_color: string;
  color: string;
}

export interface IIssueParams {
  project_id: number;
  issue_iid?: number;
  title: string;
  description: string;
  labels?: string;
}

export interface ILabelIssueParams {
  project_id: number;
  issue_iid: number;
  labels: string;
}

export interface IFileParams {
  project_id: number;
  file: any;
}
