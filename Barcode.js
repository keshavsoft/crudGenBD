import { StartFunc as StartFuncCommonFuncs } from './bin/Transactions/Kakinada/kLowDb/CommonFuncs/ReturnDbObject.js';

let StartFunc = () => {

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();
    LocalReturnData.data = db.data[0];
    // console.log("db::--", db.data);

    Object.entries(LocalReturnData.data.ItemsInOrder).forEach(([key, value]) => {

        for (let i = 0; i < value.Pcs; i++) {
            console.log("element:",i+1,value.ItemName);
            
        }
        // console.log(`${key}: ${value}`);
    });


    // console.log("LocalReturnData:", LocalReturnData);

    // db.write();

    return true;
};

// export { StartFunc };
StartFunc(); 
