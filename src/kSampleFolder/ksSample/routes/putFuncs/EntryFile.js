import express from 'express';

var router = express.Router();

import {
    PutFunc, PutInsertToKeyFunc
} from '../../controllers/putFuncs/EntryFile.js';

router.put('/:id', PutFunc);
router.put('/InsertToKey/:id/:inKey', PutInsertToKeyFunc);

export { router };