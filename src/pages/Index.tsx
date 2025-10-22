import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGallery from "@/components/ProjectGallery";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <ProjectGallery />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
