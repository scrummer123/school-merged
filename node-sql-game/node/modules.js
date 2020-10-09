const routes = require("./routes");
const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require("socket.io")(http);
const getFunctions = require("./socket.io-functions");

module.exports =  {
    app: app,
    routes: routes,
    http: http,
    io: io,
    getIoFunctions: getFunctions(io)
};