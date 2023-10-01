const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/api/blog-stats", blogController.getBlogStats);

module.exports = router;
