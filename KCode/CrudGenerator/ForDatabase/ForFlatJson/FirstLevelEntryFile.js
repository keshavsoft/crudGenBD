import { StartFunc as StartFuncFoldersOnly } from "./FirstLevel/FoldersOnly.js";

let StartFunc = ({ inTablesCollection }) => {
    StartFuncFoldersOnly({ inTablesCollection });
};

export { StartFunc };
