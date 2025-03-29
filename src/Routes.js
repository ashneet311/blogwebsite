import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/create" element={<CreateBlog />} /> {/* ✅ This works now */}
    </Routes>
  );
}

export default AppRoutes;
