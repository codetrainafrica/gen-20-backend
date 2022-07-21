const axios = require("axios");

const getPosts = async (request, response) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    let postsArr = res.data.map((post) => {
      return { ...post, message: "Lorem Ipsum Dolor" };
    });

    response.send(postsArr);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getPosts;
