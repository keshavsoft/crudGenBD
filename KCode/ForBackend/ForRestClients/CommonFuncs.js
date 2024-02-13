import fs from "fs";
import path from "path";

let StartFunc = ({ inFilesCollection, inFolderName, inTo, inTypeName, inFileName, inFrom }) => {
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFileName = inFileName;
    let LocalFrom = inFrom;

    // fs.writeFileSync(LocalFilePath, LocalBinReplaced);
    let LocalFilesCollection = inFilesCollection;

    LocalFilesCollection.forEach(LoopFile => {

        let LoopInsideFileName = path.parse(LoopFile.name).name;
        let LocalFilePath = `${LocalTo}/${inFolderName}/${LoopInsideFileName}/${LocalTypeName}/${LocalFileName}`;

        let LocalFileData = fs.readFileSync(LocalFilePath);

        let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LoopInsideFileName);
        let LocalBinReplaced = LocalFileDataReplaced.replaceAll(LocalFrom, LocalTo);
        let LocalkSampleFolderReplaced = LocalBinReplaced.replaceAll("kSampleFolder", inFolderName);

        fs.writeFileSync(LocalFilePath, LocalkSampleFolderReplaced);
    });
};

export { StartFunc };