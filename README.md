# Blog-analytics-api

This is a simple Express.js application that serves as a blog analytics and search tool. It fetches blog data from a third-party API, performs analytics on the data using Lodash, and provides endpoints to retrieve blog statistics and perform blog searches.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Installation

1. Clone the repository:


   `git clone https://github.com/Shobi172/Blog-analytics-api.git`

2. Navigate to the project directory:

   cd `Blog-analytics-api`

3. Install dependencies:

   `npm install`

4. Start the Express.js server:

   `node app.js`


The server should now be running on `http://localhost:5000`

## Usage

The API provides two main endpoints:

`/api/blog-stats` - Retrieves blog statistics.
`/api/blog-search` - Performs a search for blogs based on a query parameter.

You can make GET requests to these endpoints using tools like Postman or a web browser.


## API Endpoints

1. `/api/blog-stats`

Method: GET
Description: Retrieves blog statistics including the total number of blogs, the title of the longest blog, the number of blogs with "privacy" in the title, and an array of unique blog titles.

Example Request:

GET `http://localhost:5000/api/blog-stats`

Example Response:

{
  "totalBlogs": 50,
  "longestBlog": "Longest Blog Title",
  "blogsWithPrivacy": 10,
  "uniqueBlogTitles": ["Title 1", "Title 2", ...],
}


2. `/api/blog-search`

Method: GET
Description: Performs a search for blogs based on a query parameter (case-insensitive).

Example Request:

GET `http://localhost:3000/api/blog-search?query=privacy`

Example Response:

[
    {
        "id": "12345",
        "image_url": "https:image(1).png",
        "title": "Privacy policy"
    },
    {
        "id": "45678",
        "image_url": "https:image(2).png",
        "title": "Privacy policy"
    }

]














