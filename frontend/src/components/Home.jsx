import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setData(data.filter(post => post._id !== id));
      })
      .catch((err) => console.error("Error deleting post:", err));
  };

  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <Grid container spacing={6}>
        {data.length === 0 ? (
          <Typography variant="h6" component="div" align="center">
            No posts available
          </Typography>
        ) : (
          data.map((val) => (
            <Grid item xs={12} sm={6} md={4} key={val._id}>
              <Card sx={{ display: "flex", flexDirection: "column", height: '500px' }}>
                <CardContent>
                  <img
                    src={val.img_url || 'path/to/fallback/image.png'}
                    alt={val.title || "Post image"}
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                  <Typography gutterBottom variant="h5">
                    {val.title}
                  </Typography>
                  <Typography>{val.content}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small" variant="contained" color="secondary" onClick={() => deletePost(val._id)}>
                    Delete
                  </Button>
                  <Button size="small" variant="contained" color="secondary" onClick={() => navigateToUpdate(val._id)}>
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Home;
