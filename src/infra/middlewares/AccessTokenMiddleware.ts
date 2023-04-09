import { fail, HttpResponse, ok, unauthorized } from '@core/infra/HttpResponse';
import { Middleware } from '@core/infra/Middleware';

interface AccessTokenMiddlewareRequest {
    authorization: string
}

export class AccessTokenMiddleware implements Middleware {
	async handle({ authorization }: AccessTokenMiddlewareRequest): Promise<HttpResponse> {
		try {
			if (!authorization) {
				return unauthorized({ name: 'Unauthorized', message: 'Token não é valido' });
			}

			if (authorization != process.env.ACCESS_TOKEN && authorization != `Bearer ${process.env.ACCESS_TOKEN}`) {
				return unauthorized({ name: 'Unauthorized', message: 'Token não é valido' });
			}

			return ok();
		} catch (error) {
			return fail(error);
		}
	}

}