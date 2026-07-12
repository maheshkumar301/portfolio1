import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

function NavBar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop py-4 max-w-full ${scrolled ? 'shadow-lg bg-background/95 backdrop-blur-md' : 'bg-background/80 backdrop-blur-md'}`}>
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary tracking-tighter">
        {data.name}
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#about">Strengths</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#skills">Tech Stack</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#experience">Experience</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#projects">Projects</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#contact">Contact</a>
      </div>
      <a 
        href="/resume.pdf" 
        download="Maheshkumar_S_Resume.pdf"
        className="bg-system-red text-white font-code-label text-code-label uppercase px-6 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 inline-block text-center"
      >
        Download CV
      </a>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-system-red transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}

export default NavBar;
