import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero_section/hero_Section";
import Projects from "./components/project_section/project";
import Skills from "./components/skills_section/skills";
import About_section from "./components/about_section/about-section";
import Contact from "./components/contact_section/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className='bg-[#282C33]'>
      <Navbar />
      <Hero />
      <Projects/>
      <Skills/>
      <About_section/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
