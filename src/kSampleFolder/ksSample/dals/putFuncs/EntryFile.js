import { StartFunc as StartFuncUpdateFile } from '../../kLowDb/UpdateFile/UpdateRow.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateFile({ inDataToUpdate, inId });
};

export {
    PutFunc
};