const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user:1234@blogappcluster.pbdrh.mongodb.net/?retryWrites=true&w=majority&appName=BlogAppCluster")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });

  