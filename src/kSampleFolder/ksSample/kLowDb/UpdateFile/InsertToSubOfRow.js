import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inDataToUpdate, inId, inKeyName }) => {
    let LocalDataToUpdate = inDataToUpdate;
    let LocalKeyName = inKeyName;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();

    let LocalFindRow = db.data.find(element => {
        return element.UuId === inId;
    });

    if (LocalKeyName in LocalFindRow === false) {
        LocalReturnData.KReason = "key not found!";

        return LocalReturnData;
    };

    LocalInsertToKeyRow({
        inFindRow: LocalFindRow, inDataToUpdate: LocalDataToUpdate,
        inKeyName: LocalKeyName
    });

    db.write();

    return true;
};

const LocalInsertToKeyRow = ({ inFindRow, inDataToUpdate, inKeyName }) => {
    let LocalDataToUpdate = inDataToUpdate;
    let LocalFindRow = inFindRow;
    let LocalKeyName = inKeyName;
    let LocalKeyNeeded = LocalFindRow[LocalKeyName];

    let largest_id = Math.max(...Object.keys(LocalKeyNeeded));

    LocalKeyNeeded[largest_id + 1] = LocalDataToUpdate;
};

export { StartFunc };
