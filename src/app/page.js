import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar/>

      <div className = "container mx-auto px-12 py-4 mt-16">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
       
     
      </main>
      
  );
}
