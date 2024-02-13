import Configjson from '../../../../Config.json' assert { type: 'json' };
import fileNameJson from '../fileName.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFolderName = fileNameJson.folderName;
    let LocalFileName = fileNameJson.fileName;

    LocalReturnData.KTF = false;
    let LocalTableColumns = Configjson.jsonConfig.tableAndColumns;

    if ("children" in LocalTableColumns === false) {
        return false;
    };

    let LocalFolderNeeded = LocalTableColumns.children.find(element => {
        return element.name === LocalFolderName;
    });

    let LocalFindColumns = LocalFolderNeeded.children.find(element => {
        return element.name === LocalFileName;
    });

    return LocalFindColumns.fileData;
};

export { StartFunc };