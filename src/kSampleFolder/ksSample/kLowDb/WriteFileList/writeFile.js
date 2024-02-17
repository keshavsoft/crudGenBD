import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs()
    db.read();
    let LocalDataWithUuid = LocalFuncGeneratePk({ inDataToInsert: LocalinDataToInsert, inData: db.data });

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid);
    let LocalFromWrite = db.write();

    LocalReturnData.KTF = true;

    return LocalDataWithUuid.UuId;
};

const LocalFuncGeneratePk = ({ inDataToInsert, inData }) => {
    let LocalInData = inData;
    let LocalArrayPk = LocalInData.map(element => element.pk);
    let MaxPk = (Math.max(...LocalArrayPk, 0) + 1);

    let LocalReturnData = { ...inDataToInsert, UuId: MaxPk, pk: MaxPk, DateTime: Timestamp() };
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();

    return formattedDate;
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export { StartFunc };
