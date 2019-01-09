"use strict";

var fs = require("fs");
var http = require("http");
var https = require("https");

const app = require("./app");

var privateKey = fs.readFileSync("/etc/letsencrypt/live/www.dumbhouse.org/privkey.pem");
var certificate = fs.readFileSync("/etc/letsencrypt/live/www.dumbhouse.org/fullchain.pem");
var credentials = { key: privateKey, cert: certificate };

const PORT = process.env.PORT || 6002;
const SSL_PORT = process.env.SSL_PORT || 6443;

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT);
httpsServer.listen(SSL_PORT);
