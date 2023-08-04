const mongoose = require("mongoose");

//Connecting to the local mongoDB server

mongoose
  .connect("mongodb://127.0.0.1:27017/movie_review")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
