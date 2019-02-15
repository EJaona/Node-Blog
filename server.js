const express = require("express");
const server = express();
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");

const upperCaseName = (req, res, next) => {
  req.body.name = req.body.name.toUpperCase();
  next();
};

server.use(express.json());
server.use("/api/posts", postRouter);
server.use("/api/users", upperCaseName, userRouter);

module.exports = server;
