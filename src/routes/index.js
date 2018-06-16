import { Router } from 'express';

import project from './project';
import camp from './camp';
import worker from './worker';
import child from './child';

const router = Router();

router.use('/projects', project);
router.use('/camps', camp);
router.use('/workers', worker);
router.use('/children', child);

export default router;
