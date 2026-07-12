import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import portfolioData from './data/portfolio.json';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  
  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="custom-scrollbar">
      {/* Custom Cursor (Hidden on touch devices via CSS) */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] bg-system-red opacity-30 blur-md hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] bg-system-red hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: 12, translateY: 12 }}
      />

      {/* Background textures */}
      <div className="fixed inset-0 noise-texture z-[-1]"></div>
      <div 
        className="fixed inset-0 architectural-grid z-[-2]"
        style={{ backgroundPositionY: `${offsetY * 0.5}px` }}
      ></div>

      <NavBar data={portfolioData.personalInfo} />
      
      <main className="relative overflow-hidden">
        <Hero data={portfolioData.personalInfo} />
        <About personal={portfolioData.personalInfo} domain={portfolioData.skills.domain} />
        <Skills skills={portfolioData.skills} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Contact data={portfolioData.personalInfo} />
      </main>
    </div>
  );
}

export default App;
