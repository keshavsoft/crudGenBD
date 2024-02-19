import { StartFunc as StartFuncCommonFuncs } from '../../../../../../bin/Transactions/Kakinada/kLowDb/ReadFileList/readFileById.js';
import { StartFunc as StartFuncwriteFileFromModal } from '../../../../../../bin/QrCodes/Generate/kLowDb/WriteFileList/writeFile.js';
import { StartFunc as StartFuncCheck } from "./Check.js";

let StartFunc = ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false, KReason: "" };
    let LocalCheck = StartFuncCheck({ inId: LocalId });

    if (LocalCheck.KTF === false) {
        return LocalReturnData;
    };

    const db = StartFuncCommonFuncs({ inId: LocalId });
    let LocalIdByOrderData = db.JsonData;

    if (Object.values(LocalIdByOrderData.CheckOutData)[0] === undefined) {
        LocalReturnData.KReason = "No Settlement"
        return LocalReturnData;
    }

    let LocalBookingData = {};
    LocalBookingData.BookingData = {};
    LocalBookingData.OrderNumber = LocalIdByOrderData.UuId
    LocalBookingData.BookingData.CustomerData = LocalIdByOrderData.CustomerData;
    LocalBookingData.BookingData.OrderData = LocalIdByOrderData.OrderData;
    LocalBookingData.BookingData.AddOnData = LocalIdByOrderData.AddOnData;
    LocalBookingData.BookingData.CheckOutData = LocalIdByOrderData.CheckOutData;

    Object.entries(LocalIdByOrderData.ItemsInOrder).forEach(([key, value]) => {
        LocalForEachFunc({ itemData: value, inBookingData: LocalBookingData });
    });
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

let LocalForEachFunc = ({ itemData, inBookingData }) => {
    for (let i = 0; i < itemData.Pcs; i++) {

        let LocalSendData = {};
        LocalSendData.Pcs = i
        LocalSendData = { ...itemData, ...inBookingData }
        StartFuncwriteFileFromModal({ inDataToInsert: LocalSendData })

    };
};

export { StartFunc };
