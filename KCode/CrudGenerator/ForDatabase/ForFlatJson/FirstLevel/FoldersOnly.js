import fs from "fs-extra";
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(element => {
        let LoopInside = element.path.replace(ConfigJson.ToDataDetails.DataSchemaLocation, ConfigJson.ToDataDetails.DataPath);
        fs.mkdirSync(LoopInside);
    });
};

export { StartFunc };
