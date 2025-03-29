import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ff6347" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight="bold" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          🍽️ Foodie Blog
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/create")}>Create Blog</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
