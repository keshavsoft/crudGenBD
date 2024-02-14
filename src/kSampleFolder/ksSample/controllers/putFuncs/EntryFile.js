import { ColumnsPullFunc } from "../../DataColumns.js";

import { PutFunc as PutFuncRepo } from "../../repos/putFuncs/EntryFile.js";

let PutFunc = async (req, res) => {
  // let LocalDataToUpdate = ColumnsPullFunc()(req.body);
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;

  let LocalFromRepo = await PutFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

export { PutFunc };
