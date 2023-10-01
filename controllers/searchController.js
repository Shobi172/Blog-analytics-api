const _ = require("lodash");
const blogModel = require("../models/blogModel");

const searchBlogs = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const blogs = await blogModel.fetchBlogs();

    if (!Array.isArray(blogs)) {
      throw new Error("Invalid data format: Expected an array of blogs");
    }

    const searchResults = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );

    res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);

    res.status(500).json(error.message);
  }
};

module.exports = {
  searchBlogs,
};
