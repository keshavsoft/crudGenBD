import fs from "fs-extra";

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(element => {
        fs.mkdirSync(`${LocalTo}/${element.name}`);
    });
};

export { StartFunc };
