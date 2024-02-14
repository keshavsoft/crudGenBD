import {
    DeleteFunc as DeleteFuncDal,
    DeleteFromKeyFunc as DeleteFromKeyFuncDal
} from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFunc = async ({ inId }) => {
    return await DeleteFuncDal({ inId });
};

let DeleteFromKeyFunc = async ({ inSubId, inId, inKeyName }) => {
    return await DeleteFromKeyFuncDal({ inSubId, inId, inKeyName });
};

export { DeleteFunc, DeleteFromKeyFunc };