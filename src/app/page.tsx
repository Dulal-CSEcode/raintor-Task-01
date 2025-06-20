import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import WorkProcessSection from "../components/WorkProcessSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
