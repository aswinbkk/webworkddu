const express = require("express");
const route = express.Router();
const blogController = require("../controllers/blogController");

route.post("/create", blogController.createBlog);
route.get("/get-all", blogController.getAllBlog);

module.exports = route;
