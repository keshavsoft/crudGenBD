import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/DeleteFile.js';
import { StartFunc as StartFuncDeleteFromKey } from '../../kLowDb/DeleteFromKey/DeleteRow.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

let DeleteFromKeyFunc = ({ inSubId, inId, inKeyName }) => {
    return StartFuncDeleteFromKey({ inSubId, inId, inKeyName });
};

export { DeleteFunc, DeleteFromKeyFunc };