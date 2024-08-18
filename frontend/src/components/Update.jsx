import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    img_url: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Error fetching post data:", err));
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/update/${id}`, post)
      .then((res) => {
        console.log("Post updated:", res.data);
        navigate("/");
      })
      .catch((err) => console.error("Error updating post:", err));
  };

  return (
    <div>
      <Typography variant="h4" component="div" align="center" gutterBottom>
        Update Post
      </Typography>
      <TextField
        label="Title"
        name="title"
        value={post.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        name="content"
        value={post.content}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        label="Image URL"
        name="img_url"
        value={post.img_url}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
};

export default Update;
