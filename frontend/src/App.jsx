import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Project_page from "./pages/Project_page";
import About_page from "./pages/About_page";
import Contact_page from "./pages/Contact_page";
function App() {
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <Routes>
        {/* Main page */}
        <Route path="/" element={<Home_page />}></Route>
        <Route path="/projects" element={<Project_page />}></Route>
        <Route path="/about" element={<About_page />}></Route>
        <Route path="/contact" element={<Contact_page />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
