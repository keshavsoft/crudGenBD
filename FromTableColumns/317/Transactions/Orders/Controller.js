import {
    GetFunc as GetFuncRepo,GetDataOnlyFunc as GetDataOnlyFuncRepo,
     GetFromModalUuidFunc as GetFromModalUuidFuncRepo,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncRepo,
    PostFunc as PostFuncRepo,
    PostFromModalFunc as PostFromModalFuncRepo, GetFromModalFunc as GetFromModalFuncRepo,
    PostUploadFunc as PostUploadFuncRepo,
    PostGetSelectColumnsFunc as PostGetSelectColumnsFuncRepo,
    PostUploadFromModalFunc as PostUploadFromModalFuncRepo,GetIdFunc as GetIdFuncRepo
} from './Repo.js';

import {
    ColumnsPullFunc
} from './{{ksSample}}DataColumns.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();
    res.json(LocalFromRepo);
};

let GetDataOnlyFunc = (req, res) => {
    let LocalFromRepo = GetDataOnlyFuncRepo();
    res.json(LocalFromRepo);
};
let GetIdFunc = (req, res) => {
    let LocalParams=req.params;
    let LocalIfFromParam=LocalParams.id;

    console.log("LocalParams : ",LocalParams);
    let LocalFromRepo = GetIdFuncRepo({inId:LocalIfFromParam});
    res.json(LocalFromRepo);
};

let GetFromModalFunc = (req, res) => {
    let LocalFromRepo = GetFromModalFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidAndTSFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidAndTSFuncRepo();
    res.json(LocalFromRepo);
};

let PostFunc = (req, res) => {
    let LocalKeys = req.body['{{KSKeyName}}'];

    let LocalFromRepo = PostFuncRepo({ LocalKey1: LocalKeys });
    res.json(LocalFromRepo);
};

let PostFromModalFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostFromModalFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let PostUploadFunc = (req, res) => {
    let LocalBodyData = req.body;

    let LocalFromRepo = PostUploadFuncRepo({ LocalBodyAsModal: LocalBodyData });
    res.json(LocalFromRepo);
};

let PostUploadFromModalFunc = (req, res) => {
    let LocalBodyData = req.body;

    let LocalFromRepo = PostUploadFromModalFuncRepo({ LocalBodyAsModal: LocalBodyData });
    res.json(LocalFromRepo);
};

let PostGetSelectColumnsFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostGetSelectColumnsFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

export {
    GetFunc,GetDataOnlyFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostUploadFunc, PostGetSelectColumnsFunc,PostUploadFromModalFunc,
    GetIdFunc
};