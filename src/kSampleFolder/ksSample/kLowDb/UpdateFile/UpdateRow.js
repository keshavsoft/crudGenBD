import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inDataToUpdate, inId }) => {
    let LocalDataToUpdate = inDataToUpdate;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();
    
    let LocalFindRow = db.data.find(element => {
        return element.UuId === inId;
    });

    LocalUpdateRow({ inFindRow: LocalFindRow, inDataToUpdate: LocalDataToUpdate });

    db.write();

    return true;
};

const LocalUpdateRow = ({ inFindRow, inDataToUpdate }) => {
    let LocalDataToUpdate = inDataToUpdate;
    let LocalFindRow = inFindRow;

    Object.entries(LocalFindRow).forEach(
        ([key, value]) => {
            if (key in LocalDataToUpdate) {
                LocalFindRow[key] = LocalDataToUpdate[key]
            }
        }
    );
};

export { StartFunc };
