import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#ff6347", color: "#fff", textAlign: "center", py: 2, mt: 5 }}>
      <Typography variant="body2">© 2025 Foodie Blog. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
