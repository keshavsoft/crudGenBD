import fs from 'fs';
import { StartFunc as StartFuncCommonFuncs } from './CommonFuncs.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom }) => {
    let LocalTypeName = "restClients/crud";
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

        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "get.http",
            inFrom: LocalFrom
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "post.http",
            inFrom: LocalFrom
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "delete.http",
            inFrom: LocalFrom
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "image.http",
            inFrom: LocalFrom
        });

        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "put.http",
            inFrom: LocalFrom
        });

    });

    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "get.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "post.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "delete.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "image.http" });
    // StartFuncCommonFuncs({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "put.http" });
};

export { StartFunc };