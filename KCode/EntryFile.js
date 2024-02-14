import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as StartFuncCrudGenerator } from "./CrudGenerator/EntryFile.js";

let LocalFilesArray = StartFuncReadDataSchema();

StartFuncCrudGenerator({ inFilesArray: LocalFilesArray });
// console.log("aaaaaaaaaa : ", LocalFilesArray);
