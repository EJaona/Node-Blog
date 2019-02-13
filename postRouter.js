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

postRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postDb.getById(id);
    res.status(200).json({ success: true, post });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});

// postRouter.get("/:id/posts", async (req, res) => {
//   const { userId } = req.params;
//   try {
//     const post = await postDb.getUserPosts(userId);
//     res.status(200).json({ success: true, post });
//   } catch ({ code, message }) {
//     res.status(code).json({ success: false, message: message });
//   }
// });

postRouter.post("/", async (req, res) => {
  const newPost = req.body;
  try {
    const post = await postDb.insert(newPost);
    res.status(201).json({ success: true, post });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});

postRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const changed = await postDb.update(id, changes);
    res.status(200).json({ success: true, changed });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});
postRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await postDb.remove(id);
    res.status(200).json({ success: true });
  } catch ({ code, message }) {
    res.status(code).json({ success: false, message: message });
  }
});
module.exports = postRouter;
