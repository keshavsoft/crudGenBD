import fs from "fs-extra";
// import ConfigJson from '../../../../src/Config.json' assert {type: 'json'};
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element;
    });

    LocalFirstLevelFolders.forEach(LoopFirstLevel => {
        let LocalSecondLevelFiles = LoopFirstLevel.children.filter(element => {
            return "children" in element === false;
        });

        LocalSecondLevelFiles.forEach(LoopSecondLevel => {
            let LoopInside = LoopSecondLevel.path.replace(ConfigJson.ToDataDetails.DataSchemaLocation, ConfigJson.ToDataDetails.DataPath);

            fs.writeFileSync(LoopInside, JSON.stringify([]));
        });
    });
};

export { StartFunc };