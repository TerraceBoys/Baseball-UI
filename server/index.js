"use strict";

var fs = require("fs");
var http = require("http");
var https = require("https");

const app = require("./app");

var privateKey = fs.readFileSync("sslcert/server.key", "utf8");
var certificate = fs.readFileSync("sslcert/server.crt", "utf8");
var credentials = { key: privateKey, cert: certificate };

const PORT = process.env.PORT || 6080;
const SSL_PORT = process.env.PSSL_PORT || 6443;

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT);
httpsServer.listen(SSL_PORT);
