import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Container, Grid, Typography, Box, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
import Footer from "../components/Footer";  // ✅ Import Footer

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const foodBlogs = [
      { id: 1, title: "Homemade Pizza Perfection", content: "Learn the secrets of authentic Italian pizza...", category: "Italian", image: "/images/food.webp" },
      { id: 2, title: "Spicy Indian Street Foods", content: "Experience the best of Indian street food...", category: "Indian", image: "/images/food.webp" },
      { id: 3, title: "Best Sushi Spots", content: "Top sushi places for sushi lovers...", category: "Japanese", image: "/images/food.webp" },
    ];
    setBlogs(foodBlogs);
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* <Navbar /> */}
      <Container>
        {/* Search */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <TextField
            label="Search Food Blogs..."
            variant="outlined"
            sx={{ width: "50%" }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        {/* Featured Blog */}
        <Box sx={{ mt: 3, position: "relative" }}>
          <img src="/images/food.webp" alt="Featured" style={{ width: "100%", borderRadius: "12px" }} />
          <Box sx={{ position: "absolute", top: "50%", left: "5%", color: "#fff", maxWidth: "500px" }}>
            <Typography variant="h3" fontWeight="bold">Discover Delicious Recipes</Typography>
          </Box>
        </Box>

        {/* Blog Cards */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {filteredBlogs.map((blog) => (
            <Grid item key={blog.id} xs={12} sm={6} md={4}>
              <BlogCard {...blog} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* <Footer /> ✅ Add Footer at the Bottom */}
    </>
  );
}

export default Home;
