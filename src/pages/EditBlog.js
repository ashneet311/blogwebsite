import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, TextField, Button } from "@mui/material";
import axios from "axios";

function EditBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setBlog({ title: response.data.title, content: response.data.body });
      });
  }, [id]);

  return (
    <Container>
      <TextField
        fullWidth
        label="Title"
        value={blog.title}
        sx={{ marginTop: 2 }}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Content"
        value={blog.content}
        sx={{ marginTop: 2 }}
      />
      <Button variant="contained" sx={{ marginTop: 3 }}>
        Save Changes
      </Button>
    </Container>
  );
}

export default EditBlog;
