const axios = require("axios");

const fetchBlogs = async () => {
  const options = {
    headers: {
      "x-hasura-admin-secret":
        "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
    },
  };

  try {
    const response = await axios.get(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      options
    );

    if (!response.data || !response.data.blogs) {
      throw new Error("Oops! Something went wrong while fetching blogs.");
    }

    return response.data.blogs;
  } catch (error) {
    throw error.message;
  }
};

module.exports = {
  fetchBlogs,
};
