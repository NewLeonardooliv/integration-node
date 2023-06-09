import { Router } from 'express';
import { gitlab } from './gitlab.routes';
import { slack } from './slack.routes';

const router = Router();

router.get('/', (req, res) => {
	return res.status(201).json({
		response: 'API Integration v2 Online',
	});
});

router.use('/gitlab', gitlab);
router.use('/slack', slack);


export { router };
