// import { JSONSyncPreset } from 'lowdb/node';
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../Config.json' assert { type: 'json' };
import ModalDataJson from '../../Data.json' assert { type: 'json' };
import fileNameJson from '../fileName.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.JsonPath}/${fileNameJson.fileName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();

    LocalReturnData.JsonData = LocalFuncToModal({ inArray: db.data });
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

let LocalFuncToModal = ({ inArray }) => {
    let LocalNewArray = inArray.map(element => {
        return {
            ...ModalDataJson,
            ...element
        };
    });

    return LocalNewArray;
};

export { StartFunc };