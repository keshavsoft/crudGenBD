import express from 'express';

var router = express.Router();

import { DeleteFunc, DeleteFromKeyFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

import { DeleteFunc as DeleteFuncmiddleware } from '../../middlewares/DeleteFuncs/DeleteFunc.js';

router.delete('/:Id', DeleteFuncmiddleware, DeleteFunc);
router.delete('/FromKey/:id/:inKey/:inSubId', DeleteFromKeyFunc);

export { router };