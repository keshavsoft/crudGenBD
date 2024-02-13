import fs from "fs-extra";
import path from "path";

// import ConfigJson from '../../../../../src/Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection, inTo, inFrom }) => {
    let LocalTo = inTo;
    let LocalFrom = inFrom;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(LoopFirst => {
        let LocalSecondLevelFiles = LoopFirst.children.filter(element => {
            return "children" in element === false;
        });

        LocalSecondLevelFiles.forEach(LoopSecond => {
            // let LoopInsideFolderName = LoopSecond.path.replace(`FromTableColumns\\${ConfigJson.jsonConfig.DataPk}`, LocalTo);
            // LoopInsideFolderName = LoopInsideFolderName.replace(LoopSecond.name, LoopSecondpath.parse(LoopSecond.name).name);

            try {
                fs.cpSync(`${LocalFrom}/kSampleFolder/ksSample`, `${LocalTo}/${LoopFirst.name}/${path.parse(LoopSecond.name).name}`, {
                    recursive: true,
                });
            } catch (error) {
                console.log(error.message);
            };

            console.log("LoopSecond : ", LoopSecond);
        });
    });
};

export { StartFunc };
