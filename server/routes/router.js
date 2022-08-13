const express = require("express");
const route = express.Router();

const postController = require("../controller/postController");
const apiPostController = require("../controller/apiPostController");

/** 
 * Posts UI Routes
 */
route.get("/", postController.index)
route.get("/posts/create", postController.create)
route.get("/posts/edit/:id", postController.edit)

/**
 * Posts API routes
 */
route.post("/api/posts", apiPostController.store);
route.get("/api/posts", apiPostController.find);
route.get("/api/posts/:id", apiPostController.show);
route.put("/api/posts/:id", apiPostController.update);
route.delete("/api/posts/:id", apiPostController.delete);

module.exports = route;