import { WebSocketServer } from 'ws';

let wss;

const clients = new Map();

// let CommoninsertToClients = require('./insertToClients')

// let CommonOnMessage = require('./OnMessage/EntryFile');

// let CommonSaveToJsonOnConnections = require("./LogHistory/OnConnection/EntryFile")

let StartFunc = (server) => {
    wss = new WebSocketServer({ server });

    wss.on("connection", WsOnConnection);
};

let WsOnConnection = (ws, req) => {
    // CommoninsertToClients({
    //     inClients: clients,
    //     ws
    // });

    // CommonSaveToJsonOnConnections({
    //     inVerifyToken: LocalFromVerifyToken,
    //     inws: ws,
    //     inClients: clients,
    //     inRequest: req
    // });

    ws.on('message', (data, isBinary) => {
        // CommonOnMessage({
        //     inData: data
        // });

        setTimeout(function timeout() {
            ws.send(Date.now());
        }, 500);
    });

    ws.on('close', () => {
        console.log('closed');
    });

    ws.send(Date.now());
};

export { StartFunc };