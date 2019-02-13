const express = require("express");
const userDb = require("./data/helpers/userDb");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await userDb.get();
    res.status(200).json({ success: true, users });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});

module.exports = userRouter;
