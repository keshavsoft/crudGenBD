import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/DeleteFile.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

export { DeleteFunc };