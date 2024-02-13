import { StartFunc as StartFuncCreateFolders } from './FoldersOnly/CreateFolders.js';
import { StartFunc as StartFuncCreateRouteFiles } from './FoldersOnly/CreateRouteFiles.js';
import { StartFunc as StartFuncAlterRouteFiles } from './FoldersOnly/AlterRouteFiles/EntryFile.js';
import { StartFunc as StartFuncCopyFolders } from './FoldersOnly/InsideFiles/CopyFolders.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    StartFuncCreateFolders({ inTablesCollection, inTo });
    StartFuncCreateRouteFiles({ inTablesCollection, inFrom, inTo });
    StartFuncAlterRouteFiles({ inTablesCollection, inFrom, inTo });
    StartFuncCopyFolders({ inTablesCollection, inFrom, inTo });
};

export { StartFunc };
