import ConfigJson from '../../../Config.json' assert {type: 'json'};
import fs from "fs";

let StartFunc = () => {
    fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}/kSampleFolder`);
};

export { StartFunc };
