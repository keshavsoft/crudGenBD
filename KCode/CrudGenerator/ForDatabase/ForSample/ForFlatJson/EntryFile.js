import { StartFunc as StartFuncFirstLevelEntryFile } from "./FirstLevelEntryFile.js";
import { StartFunc as StartFuncSecondLevelEntryFile } from "./SecondLevelEntryFile.js";

let StartFunc = () => {
    StartFuncFirstLevelEntryFile();
    StartFuncSecondLevelEntryFile();
};

export { StartFunc };
