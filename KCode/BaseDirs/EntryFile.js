import fs from 'fs';
import ConfigJson from '../PrepareTablesSchema/Config.json' assert {type: 'json'};

let StartFunc = ({ inTo }) => {
    let LocalTo = inTo;

    try {
        // if (fs.existsSync(LocalTo) === false) {
        //     fs.mkdirSync(LocalTo);
        // };

        LocalFuncForBackend();
        // if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`) === false) {
        //     fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`, { recursive: true });
        // };
    } catch (error) {
        console.log("error  : ", error);
    };
};

let LocalFuncForBackend = () => {
    try {
        if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`) === false) {
            fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`, { recursive: true });
        };
    } catch (error) {
        console.log("error  : ", error);
    };
};


export { StartFunc };