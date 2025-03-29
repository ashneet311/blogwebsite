import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBlog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", blog);
      alert("Blog created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Create a New Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            fullWidth
            label="Author"
            name="author"
            value={blog.author}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Category"
            name="category"
            value={blog.category}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit Blog
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default CreateBlog;
