import fs from 'fs';
import { StartFunc as StartFuncCommonFuncs } from './CommonFuncs.js';

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = "restClients/crud";
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(LoopFirst => {
        let LocalSecondLevelFiles = LoopFirst.children.filter(element => {
            return "children" in element === false;
        });

        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "get.http"
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "post.http"
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "delete.http"
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "image.http"
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "put.http"
        });

    });

    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "get.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "post.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "delete.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "image.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "put.http" });
};

export { StartFunc };