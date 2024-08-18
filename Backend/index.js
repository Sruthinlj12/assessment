const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb+srv://user:1234@blogappcluster.pbdrh.mongodb.net/?retryWrites=true&w=majority&appName=BlogAppCluster")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Define a Blog schema and model
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
  img_url: String,
});

const BlogModel = mongoose.model("Blog", blogSchema);

// POST API to create a new blog post
app.post("/add", async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.status(201).send(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving blog post");
  }
});

// GET API to retrieve all blog posts
app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving blog posts");
  }
});

// DELETE API to delete a blog post by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete(id);
    res.status(200).send("Blog post deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting blog post");
  }
});

// PUT API to update a blog post by ID
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating blog post");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
