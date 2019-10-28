"use strict";
exports.__esModule = true;
var http = require("http");
var router_1 = require("./router");
var fs = require("fs");
var path = require("path");
var server = http.createServer(function (req, res) {
    if (req.url) {
        if (req.method == "GET") {
            var type = req.url.split(".").pop();
            var data = "";
            if (type == "js") {
                data = fs.readFileSync(path.resolve(__dirname, "./dist/index.js"), "utf8");
            }
            else if (type == "ico") {
                data = fs.readFileSync(path.resolve(__dirname, "./dist/favicon.ico"), "utf8");
            }
            else {
                data = fs.readFileSync(path.resolve(__dirname, "./dist/index.html"), "utf8");
            }
            res.end(data);
        }
        else if (req.method == "POST") {
            req.on("data", function (data) {
                if (req.url) {
                    data = JSON.parse(data.toString());
                    router_1["default"](req.url, data, res);
                }
            });
        }
    }
});
console.log("服务器已启动在http://127.0.0.1:8080");
server.listen(8080, "127.0.0.1");
