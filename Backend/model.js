//Write missing codes here
const mongoose = require('mongoose');

// Define the schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  img_url: { type: String, required: true },
});

// Create the model
const Post = mongoose.model('Post', postSchema);

// Export the model
module.exports = Post;

