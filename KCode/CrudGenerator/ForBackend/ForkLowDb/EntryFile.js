import fs from 'fs';
import path from 'path';

let StartFunc = ({ inElement, inTablesCollection, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(LoopFirst => {
        let LocalSecondLevelFiles = LoopFirst.children.filter(element => {
            return "children" in element === false;
        });

        LocalFuncForreadFile({
            inFilesArray: LocalSecondLevelFiles, inFolderName: LoopFirst.name,
            inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString
        });
    });
};

let LocalFuncForreadFile = ({ inFilesArray, inFolderName, inFrom, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "fileName.json";
    let LocalFilesArray = inFilesArray;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;

    LocalFilesArray.forEach(LoopFile => {
        let LoopInsideFileName = path.parse(LoopFile.name).name;
        let LocalFilePath = `${LocalTo}/${inFolderName}/${LoopInsideFileName}/${LocalTypeName}/${LocalFileName}`;

        let LocalFileData = fs.readFileSync(LocalFilePath);
        let LocalfileNameJsonData = JSON.parse(LocalFileData);
        LocalfileNameJsonData.fileName = LoopFile.name;
        LocalfileNameJsonData.folderName = inFolderName;

        fs.writeFileSync(LocalFilePath, JSON.stringify(LocalfileNameJsonData));
    });
};

export { StartFunc };