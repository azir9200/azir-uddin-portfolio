import BottomNavigation from "@/components/BottomNavigation";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechnicalProficiency from "@/components/TechnicalProficiency";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 transition-colors duration-300 pb-10 md:pb-0 ">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="skills">
        <TechnicalProficiency />
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* <div id="about">
        <About />
      </div> */}
      <div id="experience">
        <Experience />
      </div>
      {/* <div id="certificates">
        <Certificates />
      </div> */}
      <div id="education">
        <Education />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Index;
