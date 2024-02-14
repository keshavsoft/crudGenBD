import {
    DeleteFunc as DeleteFuncRepo,
    DeleteFromKeyFunc as DeleteFromKeyFuncRepo
} from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await DeleteFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let DeleteFromKeyFunc = async (req, res) => {
    let LocalId = req.params.Id;
    let LocalKey = req.params.inKey;
    let LocalSubId = req.params.inSubId;

    let LocalFromRepo = await DeleteFromKeyFuncRepo({
        inId: LocalId,
        inSubId: LocalSubId, inKeyName: LocalKey
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { DeleteFunc, DeleteFromKeyFunc };