import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../Config.json' assert { type: 'json' };
import fileNameJson from '../fileName.json' assert { type: 'json' };

let StartFunc = ({ inDataToUpdate, inId }) => {
    let LocalDataToUpdate = inDataToUpdate;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${fileNameJson.folderName}/${fileNameJson.fileName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
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
