import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
// import Footer from "../components/footer";
import Footer from "../components/Footer"; // ✅ Import Footer

function BlogDetails() {
  const { id } = useParams();

  return (
    <>
      <Container>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h3" fontWeight="bold">Food Blog #{id}</Typography>
          <img src="/images/food.webp" alt="Food" style={{ width: "100%", borderRadius: "12px", marginTop: "20px" }} />
          <Typography sx={{ mt: 3 }}>This is the full content of the food blog...</Typography>
        </Box>
      </Container>

      {/* <Footer /> ✅ Add Footer at the Bottomgit branch -M main
 */}
    </>
  );
}

export default BlogDetails;
