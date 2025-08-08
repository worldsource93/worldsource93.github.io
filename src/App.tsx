import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/ui/header/Header';
import Footer from './component/ui/footer/Footer';
import AboutSection from './component/sections/AboutSection';
import SkillsSection from './component/sections/SkillsSection';
import CareerSection from './component/sections/CareerSection';
import ProjectsSection from './component/sections/ProjectsSection';
import LecturesSection from './component/sections/LecturesSection';
import ContactSection from './component/sections/ContactSection';
import DemoSection from './component/sections/DemoSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutSection />
                <SkillsSection />
                <CareerSection />
                <ProjectsSection />
                <LecturesSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/demo" element={<DemoSection />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
