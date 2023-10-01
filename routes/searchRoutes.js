const express = require("express");
const searchController = require("../controllers/searchController");

const router = express.Router();

router.get("/api/blog-search", searchController.searchBlogs);

module.exports = router;
