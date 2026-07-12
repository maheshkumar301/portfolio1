import React, { useEffect, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

function NavBar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-outline-variant/30 flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-full ${scrolled ? 'shadow-lg bg-background/95 backdrop-blur-md' : 'bg-background/80 backdrop-blur-md'}`}>
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary tracking-tighter">
        {data.name}
      </div>
      
      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-on-surface"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#about">Strengths</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#skills">Tech Stack</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#experience">Experience</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#projects">Projects</a>
        <a className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300" href="#contact">Contact</a>
      </div>
      <a 
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="Maheshkumar_S_Resume.pdf"
        className="hidden md:inline-block bg-system-red text-white font-code-label text-code-label uppercase px-6 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 text-center"
      >
        Download CV
      </a>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-container-lowest border-b border-outline-variant/30 flex flex-col items-center py-8 gap-6 md:hidden shadow-xl"
          >
            <a onClick={() => setMobileMenuOpen(false)} className="font-body-md text-body-md uppercase tracking-wider text-on-surface hover:text-system-red" href="#about">Strengths</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-body-md text-body-md uppercase tracking-wider text-on-surface hover:text-system-red" href="#skills">Tech Stack</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-body-md text-body-md uppercase tracking-wider text-on-surface hover:text-system-red" href="#experience">Experience</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-body-md text-body-md uppercase tracking-wider text-on-surface hover:text-system-red" href="#projects">Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-body-md text-body-md uppercase tracking-wider text-on-surface hover:text-system-red" href="#contact">Contact</a>
            
            <a 
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Maheshkumar_S_Resume.pdf"
              className="mt-4 bg-system-red text-white font-code-label text-code-label uppercase px-8 py-3 rounded-lg w-[80%] text-center"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-system-red transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}

export default NavBar;
