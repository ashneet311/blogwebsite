import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function BlogCard({ id, title, content, image, category }) {
  const navigate = useNavigate();

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 5, cursor: "pointer", overflow: "hidden" }} onClick={() => navigate(`/blog/${id}`)}>
        <CardMedia component="img" height="200" image={image} alt={title} />
        <CardContent>
          <Box sx={{ background: "#ff6347", color: "#fff", px: 1, py: 0.5, borderRadius: 1, display: "inline-block" }}>
            {category}
          </Box>
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>{title}</Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>{content.substring(0, 50)}...</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default BlogCard;
