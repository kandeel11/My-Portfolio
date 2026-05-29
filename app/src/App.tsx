import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/sections/Navigation';
import HeroSection from '@/sections/HeroSection';
import SkillsSection from '@/sections/SkillsSection';
import TickerDivider from '@/sections/TickerDivider';
import ExperienceSection from '@/sections/ExperienceSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/sections/Footer';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <SmoothScrollProvider>
        <CustomCursor />
        <Navigation />
        <main>
          <HeroSection />
          <SkillsSection />
          <TickerDivider />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

export default App;
