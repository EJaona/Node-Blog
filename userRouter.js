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

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userDb.getById(id);
    res.status(200).json({ success: true, user });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});
userRouter.get("/:userId/posts", async (req, res) => {
  const { userId } = req.params;
  try {
    const userPosts = await userDb.getUserPosts(userId);
    res.status(200).json({ success: true, userPosts });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});

userRouter.post("/", async (req, res) => {
  const user = req.body;

  try {
    const newUser = await userDb.insert(user);
    res.status(201).json({ success: true, newUser });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});

userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const updated = await userDb.update(id, changes);
    res.status(200).json({ success: true, updated });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await userDb.remove(id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
});
module.exports = userRouter;
