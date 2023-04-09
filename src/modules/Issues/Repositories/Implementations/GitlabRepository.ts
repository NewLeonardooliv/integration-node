import { useAxios } from '@helpers/useAxios';
import { Issues, Comment, Files, Projects } from '../../Dtos/Gitlab';


import fs from 'fs';
import * as fsp from 'node:fs/promises';
import FormData from 'form-data';
import { ICommentParams, IFileParams, IIssueParams, IIssuesRepository, ILabelIssueParams } from '../IGitlabRepository';
require('dotenv/config');

export class GitlabRepository implements IIssuesRepository {
	URL = process.env.GITLAB_API;
	TOKEN = process.env.GITLAB_PASSWORD;

	async newIssue({ projectId, title, description }: IIssueParams): Promise<Issues> {
		const { data } = await useAxios({
			url: `${this.URL}/projects/${projectId}/issues`,
			method: 'POST',
			token: `Bearer ${this.TOKEN}`,
			data: { title, description },
		});

		return data;
	}

	async editIssue({ projectId, issueId, title, description }: IIssueParams): Promise<Issues> {
		const { data } = await useAxios({
			url: `${this.URL}/projects/${projectId}/issues/${issueId}`,
			method: 'PUT',
			token: `Bearer ${this.TOKEN}`,
			data: { title, description },
		});

		return data;
	}

	async sendFile({ projectId, file }: IFileParams): Promise<Files> {
		const imageData = fs.readFileSync(file.path);

		const formData = new FormData();
		formData.append('file', imageData, { filename: file.filename });

		const { data } = await useAxios({
			url: `${this.URL}/projects/${projectId}/uploads`,
			method: 'POST',
			token: `Bearer ${this.TOKEN}`,
			contentType: 'multipart/form-data',
			data: formData,
		});

		fsp.unlink(file.path);

		return data;
	}

	async updateLabelIssue({ projectId, issueId, labels }: ILabelIssueParams): Promise<Issues> {
		const { data } = await useAxios({
			url: `${this.URL}/projects/${projectId}/issues/${issueId}`,
			method: 'PUT',
			token: `Bearer ${this.TOKEN}`,
			data: { labels: labels },
		});

		return data;
	}

	validateLabel(labels: string): boolean {
		const arLabels = [
			'Pausada',
			'Em progresso',
			'Refatoração',
			'Pronto para teste',
			'Com erro',
			'Em teste',
		];

		return arLabels.includes(labels);
	}

	async commentOnIssue({ projectId, issueId, body }: ICommentParams): Promise<Comment> {
		const { data } = await useAxios({
			url: `${this.URL}/projects/${projectId}/issues/${issueId}/notes`,
			method: 'POST',
			token: `Bearer ${this.TOKEN}`,
			data: { body },
		});

		return data;
	}

	validateCreateNewIssue(): boolean {
		throw new Error('Method not implemented.');
	}

	validateUpdateNewIssue(): boolean {
		throw new Error('Method not implemented.');
	}

	async searchByQuery(query: string) {
		const { data } = await useAxios({
			url: `${this.URL}/search?${query}`,
			method: 'GET',
			token: `Bearer ${this.TOKEN}`,
		});

		return data;
	}

	async createLabelsOnProject(projectId: number, labels: any[]): Promise<boolean> {
		try {
			labels.forEach(element => {
				useAxios({
					url: `${this.URL}/projects/${projectId}/labels`,
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
				name: 'Pausada',
				description: 'Atividades que estão pausadas por motivos de espera ou por ocorrer problemas maiores.',
				descriptionHtml: 'Atividades que estão pausadas por motivos de espera ou por ocorrer problemas maiores.',
				textColor: '#FFFFFF',
				color: '#6699cc'
			},
			{
				id: 2,
				name: 'Em progresso',
				description: 'Atividades que já estão em fase de desenvolvimento.',
				descriptionHtml: 'Atividades que já estão em fase de desenvolvimento.',
				textColor: '#FFFFFF',
				color: '#009966'
			},
			{
				id: 3,
				name: 'Refatoração',
				description: 'Atividades que estão a espera de refatoração por outro profissional.',
				descriptionHtml: 'Atividades que estão a espera de refatoração por outro profissional.',
				textColor: '#FFFFFF',
				color: '#00b140'
			},
			{
				id: 4,
				name: 'Pronto para teste',
				description: 'Atividades que estão prontas para serem testadas verificando se estão dentro dos requisitos exigidos sem nenhum problema.',
				descriptionHtml: 'Atividades que estão prontas para serem testadas verificando se estão dentro dos requisitos exigidos sem nenhum problema.',
				textColor: '#FFFFFF',
				color: '#ed9121'
			},
			{
				id: 5,
				name: 'Com erro',
				description: 'Atividades que foram testadas e porém foi encontrado problemas ou erros.',
				descriptionHtml: 'Atividades que foram testadas e porém foi encontrado problemas ou erros.',
				textColor: '#FFFFFF',
				color: '#dc143c'
			},
			{
				id: 6,
				name: 'Em teste',
				description: 'Atividades que já estão em processo de testes manuais.',
				descriptionHtml: 'Atividades que já estão em processo de testes manuais.',
				textColor: '#FFFFFF',
				color: '#3cb371'
			},
		];
	}

	async findProjectById(id_project: number): Promise<Projects> {
		const { data } = await useAxios({
			url: `${this.URL}/projects/${id_project}`,
			method: 'GET',
			token: `Bearer ${this.TOKEN}`,
		});

		return data;
	}

	async findIssueById(id_issue: number): Promise<Projects> {
		const { data } = await useAxios({
			url: `${this.URL}/issues/${id_issue}`,
			method: 'GET',
			token: `Bearer ${this.TOKEN}`,
		});

		return data;
	}
}
