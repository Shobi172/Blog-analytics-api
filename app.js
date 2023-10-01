const express = require("express");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const searchRoutes = require("./routes/searchRoutes");

const app = express();

app.use(bodyParser.json());

app.use(blogRoutes);
app.use(searchRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
