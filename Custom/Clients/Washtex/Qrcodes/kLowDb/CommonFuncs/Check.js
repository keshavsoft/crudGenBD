import { StartFunc as StartFuncCommonFuncs } from '../../../../../../bin/QrCodes/Generate/kLowDb/CommonFuncs/ReturnDbObject.js';

const StartFunc = ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false };

    const db = StartFuncCommonFuncs();
    db.read();
    let LocalRowNeeded = db.data.find(e => e.OrderNumber === LocalId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KTF = true;
        return LocalReturnData;
    };
    return LocalReturnData;

};
export { StartFunc };