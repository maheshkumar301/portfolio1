import React from 'react';
import { motion } from 'framer-motion';

function Hero({ data }) {
  const initials = data.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden" id="hero">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] opacity-20 primary-gradient-glow blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-12 gap-gutter w-full items-center">
        <motion.div
          className="col-span-12 md:col-span-7 flex flex-col gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="w-16 h-16 md:w-20 md:h-20 bg-surface-container border border-outline-variant flex items-center justify-center mb-2 md:mb-4">
            <span className="font-display-xl text-3xl md:text-5xl text-system-red leading-none select-none">{initials}</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-display-xl text-4xl md:text-5xl lg:text-7xl text-on-surface max-w-2xl leading-tight">
            {data.role[0]} <br className="md:hidden" />
            <span className="text-system-red">& Developer</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {data.about}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a className="text-center bg-system-red text-white px-8 py-4 font-code-label text-code-label uppercase tracking-widest rounded transition-all hover:brightness-110" href="#projects">
              View Systems
            </a>
            <a className="text-center border border-on-surface/50 text-on-surface px-8 py-4 font-code-label text-code-label uppercase tracking-widest rounded transition-all hover:bg-on-surface/10" href="#contact">
              Initial Commit
            </a>
          </motion.div>
        </motion.div>

        <div className="col-span-12 md:col-span-5 relative mt-16 md:mt-0">
          <motion.div
            className="relative z-10 border border-outline-variant p-2 bg-surface-container-lowest"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <img
              alt={`${data.name} Portrait`}
              className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
              src={`${import.meta.env.BASE_URL}profile.png`}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-system-red opacity-50"
              initial={{ x: -20, y: -20 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            ></motion.div>
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-system-red opacity-50"
              initial={{ x: 20, y: 20 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
