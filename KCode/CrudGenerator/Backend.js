import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";
import { StartFunc as StartFuncForBackend } from './ForBackend/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    StartFuncPrepareReadColumnsData({ inTableData: inFilesArray });

    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src";
    let CommonTo = "bin";

    StartFuncForBackend({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });
};

export { StartFunc };
