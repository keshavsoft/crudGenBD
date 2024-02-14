let StartFunc = ({ inEndPointsArray, inFileData }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalFileData = inFileData;

    let LocalToSearch = "import { router as routerFromkSampleFolder } from './kSampleFolder/routes.js';"
    let FromLocalForEndPoints = LocalForEndPoints({ inEndPointsArray: LocalEndPointsArray, inToSearch: LocalToSearch });
    let LocalNewData = LocalFileData.replaceAll(LocalToSearch, FromLocalForEndPoints);

    return LocalNewData;
};

let LocalForEndPoints = ({ inEndPointsArray, inToSearch }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalToSearch = inToSearch;

    let LocalNewArray = LocalEndPointsArray.map(element => {
        return LocalToSearch.replaceAll("kSampleFolder", element.name);
    });

    return LocalNewArray.join("\r\n");
};

export { StartFunc };