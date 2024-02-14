import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inSubId, inId, inKeyName }) => {
    let LocalKeyName = inKeyName;
    let LocalSubId = inSubId;

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

    delete LocalFindRow[LocalKeyName][LocalSubId];

    db.write();

    return true;
};

export { StartFunc };
