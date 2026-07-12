import React from 'react';
import { motion } from 'framer-motion';

function Experience({ experiences }) {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-code-label text-code-label text-system-red uppercase mb-2 block">Timeline</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Professional Trajectory</h2>
        </div>
        
        <div className="relative border-l border-outline-variant/30 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="mb-12 relative pl-8 md:pl-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-system-red shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="font-headline-md text-headline-md text-on-surface">{exp.role}</h3>
                <span className="font-code-label text-xs text-system-red mt-1 md:mt-0 uppercase tracking-wider">{exp.duration}</span>
              </div>
              
              <div className="font-code-label text-sm text-on-surface-variant uppercase tracking-widest mb-4">
                {exp.company}
              </div>
              
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
