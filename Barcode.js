import { StartFunc as StartFuncCommonFuncs } from './bin/Transactions/Kakinada/kLowDb/CommonFuncs/ReturnDbObject.js';
import { StartFunc as StartFuncwriteFileFromModal } from './bin/QrCodes/Generate/kLowDb/WriteFileList/writeFile.js';
import BarcodeJson from './Barcode.json' assert {type: 'json'};

let StartFunc = () => {

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();
    LocalReturnData.data = db.data[0];
    console.log("db::--", LocalReturnData.data);

    let LocalBookingData = {};
    LocalBookingData.BookingData = {};
    LocalBookingData.BookingData.CustomerData = LocalReturnData.data.CustomerData;
    LocalBookingData.BookingData.OrderData = LocalReturnData.data.OrderData;
    LocalBookingData.BookingData.AddOnData = LocalReturnData.data.AddOnData;
    LocalBookingData.BookingData.CheckOutData = LocalReturnData.data.CheckOutData;

    Object.entries(LocalReturnData.data.ItemsInOrder).forEach(([key, value]) => {
        LocalForEachFunc({ itemData: value, inBookingData: LocalBookingData });
    });
    return true;
};

let LocalForEachFunc = ({ itemData, inBookingData }) => {
    for (let i = 0; i < itemData.Pcs; i++) {

        let LocalSendData = {};
        LocalSendData.Pcs = i
        LocalSendData = { ...itemData, ...inBookingData }
        StartFuncwriteFileFromModal({ inDataToInsert: LocalSendData })

    }
};

// export { StartFunc };
StartFunc(); 
