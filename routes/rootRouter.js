const express = require("express");
const path = require("path");
const rootRouter = express.Router();

rootRouter.get("^/$|/index(.html)?", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "views", "index.html"))
);

module.exports = rootRouter;
