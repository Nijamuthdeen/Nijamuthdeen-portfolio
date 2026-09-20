import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/layout/LoadingScreen";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";
import CustomCursor from "./components/layout/CustomCursor";
import ParticlesBackground from "./components/layout/ParticlesBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ExperienceTimeline from "./components/sections/ExperienceTimeline";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import TechStack from "./components/sections/TechStack";
import Services from "./components/sections/Services";
import Achievements from "./components/sections/Achievements";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

import NotFound from "./pages/NotFound";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline />
      <Projects />
      <Certifications />
      <TechStack />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative bg-bg text-white font-body min-h-screen">
      <LoadingScreen show={loading} />
      <div className="grain-overlay" />
      <ParticlesBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
