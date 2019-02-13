const express = require("express");
const server = express();
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");

server.use(express.json());
server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);

module.exports = server;
