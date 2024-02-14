import { StartFunc as StartFuncUpdateFile } from '../../kLowDb/UpdateFile/UpdateRow.js';
import { StartFunc as StartFuncInsertToSubOfRow } from '../../kLowDb/UpdateFile/InsertToSubOfRow.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateFile({ inDataToUpdate, inId });
};

let PutInsertToKeyFunc = ({ inDataToUpdate, inId, inKeyName }) => {
    return StartFuncInsertToSubOfRow({ inDataToUpdate, inId, inKeyName });
};

export {
    PutFunc, PutInsertToKeyFunc
};