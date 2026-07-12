import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

function Projects({ projects }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const getImageUrl = (index) => {
    const urls = [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkDEkW4hpLjfUWuOF5zD9n0JmFVch_WT0K9oMQs531p-eEkX_DwJZd2wcSbickSeJHFmIBsDGvonMjQs-4UMZjCKJ8fH8nc3eaCwu3_SMkGwEeEI2nANn10cqWev-mU9enK4aPjKrVIw6uec-8-CsipR_UxF_4h_LB6f6Nd_5XxYtRIYm_KDDXKV5qizretHCvbLC27OjS0l8-ImR5pxE6xBRoWqM67a1Vr2gecqTDiBs79fysG8xOzEo3CPBQsdYxfxyA-kulkyA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCg2xmIvBVS4W_Vv4TUNuycGWbglYbTheQ6CqxZjRXuesk5zeFYC9ktxmPJdIo6osTm8THH0khRNd2Eok53pFtUwGQutbVcLeDO-8AO-4hVwczFXTTRMJ1ifwWpUn5OJRJA8j3kVhz6lmCpXaoSU8ETohXnoMY4M0Awgu2bIz5cgzPNbfaj4m4VUcYh3K7_5eF2VO-2GE4HsoIcgB5lRMM-_Pu7pyRfvNtvUM6vZwiHlVHnKpO5_4p9XSg8wkp-REUAzF_r4Kj8_1g"
    ];
    return urls[index % urls.length];
  };

  const renderMajorCard = (project, isReversed = false, imageIndex = 0) => {
    return (
      <motion.div 
        key={project.id} 
        className="md:col-span-2 bg-surface-container border border-outline-variant overflow-hidden group"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {!isReversed ? (
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="font-code-label text-xs text-system-red uppercase tracking-widest mb-4 block">{project.category}</span>
                <h3 className="font-headline-md text-on-surface mb-4">{project.title}</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="font-code-label text-[10px] uppercase border border-outline-variant px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-surface-container-high relative min-h-[300px] overflow-hidden order-last md:order-first">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('${getImageUrl(imageIndex)}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          )}

          {!isReversed ? (
            <div className="bg-surface-container-high relative min-h-[300px] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('${getImageUrl(imageIndex)}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          ) : (
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="font-code-label text-xs text-system-red uppercase tracking-widest mb-4 block">{project.category}</span>
                <h3 className="font-headline-md text-on-surface mb-4">{project.title}</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="font-code-label text-[10px] uppercase border border-outline-variant px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const renderMinorCard = (project) => {
    return (
      <motion.div 
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <Tilt
          tiltEnable={!isMobile}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={!isMobile}
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          className="h-full"
        >
          <div className="bg-surface-container border border-outline-variant p-8 flex flex-col justify-between hover:border-system-red transition-all group h-full">
            <div>
              <span className="font-code-label text-xs text-system-red uppercase tracking-widest mb-4 block">{project.category}</span>
              <h3 className="font-headline-md text-on-surface mb-4">{project.title}</h3>
              <p className="text-on-surface-variant font-body-md">{project.description}</p>
            </div>
            <div className="pt-6 border-t border-outline-variant flex justify-between items-center mt-6">
              <div className="flex flex-wrap gap-2">
                <span className="w-1 h-1 bg-system-red rounded-full self-center"></span>
                <span className="font-code-label text-[10px] uppercase">{project.tech.slice(0,2).join(" / ")}</span>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop" id="projects">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <span className="font-code-label text-code-label text-system-red uppercase mb-2 block">Repository</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Featured Deployments</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {projects.map((project, index) => {
          if (index === 0) return renderMajorCard(project, false, 0);
          if (index === 1 || index === 2) return renderMinorCard(project);
          if (index === 3) return renderMajorCard(project, true, 1);
          return renderMinorCard(project);
        })}
      </div>
    </section>
  );
}

export default Projects;
