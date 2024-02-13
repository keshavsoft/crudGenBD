import { StartFunc as StartFuncreadFile } from './kLowDb/{{ksSample}}readFile.js';
import { StartFunc as StartFuncReadFileFromModal } from './kLowDb/{{ksSample}}readFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from './kLowDb/{{ksSample}}writeFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from './kLowDb/{{ksSample}}writeFileFromModal.js';
import { StartFunc as StartFuncImportToFile } from './kLowDb/{{ksSample}}ImportToFile.js';
import { StartFunc as StartFuncUploadToFile } from './kLowDb/{{ksSample}}UploadToFile.js';
import { StartFunc as StartFunReadFileById } from './kLowDb/{{ksSample}}readFileById.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = StartFuncreadFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = StartFunReadFileById({ inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetFromModalFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidAndTSFunc = () => {
    return StartFuncReadFileFromModal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return StartFuncwriteFile({ LocalKey1: LocalKeys });
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
    GetFunc, GetDataOnlyFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc, GetIdFunc
};