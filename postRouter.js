const express = require("express");
const postDb = require("./data/helpers/postDb");

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  try {
    const posts = await postDb.get();
    res.status(200).json({ success: true, posts });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});

module.exports = postRouter;
