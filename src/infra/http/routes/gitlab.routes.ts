import { Router } from 'express';
import multer from 'multer';
import { config } from '@config/multer';
import { adapterMiddleware } from '@core/infra/adapters/ExpressMiddlewareAdapter';

import { commentOnIssueController } from '@infra/factories/controllers/CommentOnIssueControllerFactory';
import { createLabelsOnProjectController } from '@infra/factories/controllers/CreateLabelsOnProjectControllerFactory';
import { editIssueController } from '@infra/factories/controllers/EditIssueControllerFactory';
import { newIssueController } from '@infra/factories/controllers/NewIssueControllerFactory';
import { updateLabelIssueController } from '@infra/factories/controllers/UpdateLabelIssueControllerFactory';
import { accessTokenMiddleware } from '@infra/factories/middlewares/AccessTokenMiddlewareFactory';
import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';

const gitlab = Router();
const upload = multer(config);

gitlab.use(adapterMiddleware(accessTokenMiddleware));
gitlab.post('/newIssue', upload.single('anexo'), adapterRoute(newIssueController));
gitlab.post('/editIssue', adapterRoute(editIssueController));
gitlab.post('/commentOnIssue', adapterRoute(commentOnIssueController));
gitlab.post('/updateLabelIssue', adapterRoute(updateLabelIssueController));
gitlab.post('/createLabelsOnProject', adapterRoute(createLabelsOnProjectController));

export { gitlab };
