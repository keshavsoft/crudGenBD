import { DeleteFunc as DeleteFuncDal } from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFunc = async ({ inId }) => {
    return await DeleteFuncDal({ inId });
};

export { DeleteFunc };