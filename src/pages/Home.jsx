import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <NavBar />
        <main className="container max-w-5xl mx-auto px-4 z-10 pt-32">
            <HeroSection />
            
            <ExperienceSection />
          
            <ContactSection />
        </main>

      <footer className="py-12 bg-background px-12 relative mt-12 ml-0 pt-8 flex flex-wrap justify-between items-left">
          <p className="text-sm text-muted-foreground">updated may 2026</p>
      </footer>
    </div>
  );
};