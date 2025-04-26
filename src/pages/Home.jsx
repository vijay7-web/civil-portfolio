// In Home.jsx
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <ServicesSection id="services" />
      <ProjectsSection id="projects" />
      <Testimonials id="testimonials"/>
      <ContactForm id="contact" />
    </div>
  );
};

export default Home;
