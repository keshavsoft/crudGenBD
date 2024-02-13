import express from 'express';

var router = express.Router();

import { router as routerFromkSampleFolder } from './kSampleFolder/routes.js';

router.use('/kSampleFolder', routerFromkSampleFolder);

export { router };