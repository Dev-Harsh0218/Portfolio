import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero_section/hero_Section";
import Projects from "./components/project_section/project";
import Skills from "./components/skills_section/skills";
function App() {
  return (
    <div className='bg-[#282C33]'>
      <Navbar />
      <Hero />
      <Projects/>
      <Skills/>
    </div>
  )
}

export default App
