import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/writeFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from '../../kLowDb/WriteFileList/writeFileFromModal.js';
import { StartFunc as StartFuncImportToFile } from '../../kLowDb/WriteFileList/ImportToFile.js';
import { StartFunc as StartFuncUploadToFile } from '../../kLowDb/WriteFileList/UploadToFile.js';

let PostFunc = ({ inBodyKeys }) => {
    return StartFuncwriteFile({ inDataToInsert: inBodyKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return StartFuncImportToFile({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncUploadToFile({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return StartFuncReadFileFromModal();
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
};