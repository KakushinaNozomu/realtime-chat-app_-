
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/styles/style.css", (req, res) => {
  res.sendFile(__dirname + "/public/styles/style.css");
});

app.get("/main.js", (req, res) => {
  res.sendFile(__dirname + "/public/main.js");
});

app.get("/node_modules/socket.io/dist")

io.on("connection", (socket) => {
  console.log("a user connected");
  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log("listening on 3000");
});