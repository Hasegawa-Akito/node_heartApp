const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("HEllo World");
});

app.get("/api", (req, res) => {
    res.json({ message: "hello world" });
});

server.listen(port, () => {
    console.log("listen on 8000");
});