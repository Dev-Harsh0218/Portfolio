import Hero from "../components/hero_section/hero_Section";
import Projects from "../components/project_section/project";
import Skills from "../components/skills_section/skills";
import About_section from "../components/about_section/about-section";
import Contact from "../components/contact_section/contact";
const Home_page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About_section />
      <Contact />
    </>
  );
};

export default Home_page;
