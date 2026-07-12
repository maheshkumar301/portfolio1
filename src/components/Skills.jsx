import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function Skills({ skills }) {
  const scrollRef = useRef(null);
  const categories = Object.keys(skills).filter(k => k !== 'domain');

  // Helper to rename categories to match the screenshot if needed
  const getCategoryDisplay = (cat) => {
    if (cat.toLowerCase() === 'mobile') return 'Cross-Platform';
    if (cat.toLowerCase() === 'database') return 'Database';
    if (cat.toLowerCase() === 'tools') return 'Technical';
    return cat;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Roughly the width of one column + gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 px-margin-desktop bg-background border-t border-outline-variant/30" id="skills">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-code-label text-xs text-system-red uppercase mb-2 block tracking-[0.2em]">Tech Stack</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Competencies</h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-full hover:border-system-red hover:text-system-red transition-colors text-on-surface-variant"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-full hover:border-system-red hover:text-system-red transition-colors text-on-surface-variant"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map((cat, index) => (
            <motion.div 
              key={cat}
              className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-code-label text-sm text-system-red uppercase tracking-[0.15em] border-b border-surface-container-high pb-3 mb-6">
                {getCategoryDisplay(cat)}
              </h3>
              
              <div className="space-y-4">
                {skills[cat].map((skill, i) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillLevel = typeof skill === 'string' ? 80 : (skill.level || 80);
                  
                  return (
                    <div key={skillName} className="group pr-4">
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">{skillName}</span>
                        <span className="font-code-label text-[10px] text-system-red">{skillLevel}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-surface-container overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skillLevel}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-system-red"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
