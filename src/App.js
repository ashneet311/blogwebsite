import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";  // ✅ Import Navbar once
// import Footer from "./components/footer";
import Footer from "./components/Footer";  // ✅ Import Footer once

function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ Header appears only once */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>

      <Footer />  {/* ✅ Footer appears only once */}
    </Router>
  );
}

export default App;
