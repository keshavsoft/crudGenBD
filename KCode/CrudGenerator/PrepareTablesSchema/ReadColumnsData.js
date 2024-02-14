import fs from "fs";

let StartFunc = ({ inTableData }) => {
    let LocalFirstLevelFolders = inTableData.children.filter(element => {
        return "children" in element;
    });

    LocalFirstLevelFolders.forEach(LoopFolders => {
        let LocalSecondLevelFiles = LoopFolders.children.filter(element => {
            return "children" in element === false;
        });

        LocalSecondLevelFiles.forEach(element => {
            let LoopInsideFileData = fs.readFileSync(element.path);
            element.fileData = JSON.parse(LoopInsideFileData);
        });
    });
};

export { StartFunc };
