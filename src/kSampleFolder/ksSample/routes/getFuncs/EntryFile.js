import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetFromModalFunc, GetIdFunc, GetBodyCheckFunc,GetRowCountFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/FromModal', GetFromModalFunc);
router.get('/', GetFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/BodyCheck', GetBodyCheckFunc);
router.get('/RowCount', GetRowCountFunc);

router.get('/:id', GetIdFunc);
// BodyCheck


export { router };