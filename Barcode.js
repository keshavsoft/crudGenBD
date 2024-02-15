import { StartFunc as StartFuncCommonFuncs } from './bin/Transactions/Kakinada/kLowDb/CommonFuncs/ReturnDbObject.js';
import { StartFunc as StartFuncwriteFileFromModal } from './bin/QrCodes/Generate/kLowDb/WriteFileList/writeFile.js';

let StartFunc = () => {

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();
    LocalReturnData.data = db.data[0];
    console.log("db::--", db.data);

    Object.entries(LocalReturnData.data.ItemsInOrder).forEach(LocalForEachFunc);

    return true;
};

let LocalForEachFunc = ([key, value]) => {
    for (let i = 0; i < value.Pcs; i++) {
        console.log("element:", i, value.ItemName);
        let LocalSendData = {};
        LocalSendData.Pcs = i
        LocalSendData = { ...value }
        StartFuncwriteFileFromModal({ inDataToInsert: LocalSendData })

    }
};

// export { StartFunc };
StartFunc(); 
