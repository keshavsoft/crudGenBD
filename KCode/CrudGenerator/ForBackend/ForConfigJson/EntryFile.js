import fs from 'fs';
import ConfigJson from '../../Config.json' assert {type: 'json'};

let StartFunc = async ({ inTablesCollection, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    LocalfileNameJsonData.jsonConfig.tableAndColumns = inTablesCollection;
    LocalfileNameJsonData.jsonConfig.DataPk = ConfigJson.ToDataDetails.DataPk;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };