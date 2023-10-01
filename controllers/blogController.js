const _ = require("lodash");
const blogModel = require("../models/blogModel");

const getBlogStats = async (req, res) => {
  try {
    const blogs = await blogModel.fetchBlogs();

    if (!Array.isArray(blogs)) {
      throw new Error("Invalid data format: Expected an array of blogs");
    }

    const totalBlogs = blogs.length;
    const longestBlog = _.maxBy(blogs, "title.length");

    const blogsWithPrivacy = blogs.filter((blog) =>
      blog.title.toLowerCase().includes("privacy")
    );
    const uniqueBlogTitles = _.uniqBy(blogs, "title").map((blog) => blog.title);

    const statistics = {
      totalBlogs,
      longestBlog: longestBlog ? longestBlog.title : null,
      blogsWithPrivacy: blogsWithPrivacy.length,
      uniqueBlogTitles,
    };

    res.status(200).json(statistics);
  } catch (error) {
    console.error(error);

    res.status(500).json(error.message);
  }
};

module.exports = {
  getBlogStats,
};
