import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const AnimatedCounter = ({ from, to, isDecimal = false, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => 
    isDecimal ? latest.toFixed(1) : Math.round(latest)
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, to, isInView, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const getIconForDomain = (domainName) => {
  const name = domainName.toLowerCase();
  if (name.includes('web')) return 'language';
  if (name.includes('mobile') || name.includes('app')) return 'smartphone';
  if (name.includes('desktop') || name.includes('software')) return 'desktop_windows';
  if (name.includes('backend') || name.includes('api')) return 'dns';
  if (name.includes('medical') || name.includes('hl7') || name.includes('health')) return 'medical_services';
  if (name.includes('embedded') || name.includes('iot')) return 'memory';
  if (name.includes('pos')) return 'point_of_sale';
  if (name.includes('logistics') || name.includes('shipment')) return 'local_shipping';
  if (name.includes('betting')) return 'sports_esports';
  return 'architecture';
};

function About({ personal, domain }) {
  const cards = domain.slice(0, 4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const expValue = parseFloat(personal.experience) || 2.5;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="about">
      <div className="grid grid-cols-12 gap-gutter">
        <motion.div 
          className="col-span-12 md:col-span-4 border-l border-system-red pl-8 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-code-label text-code-label text-system-red uppercase mb-2 block">System Specs</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Omnichannel Expertise</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
            {personal.about}
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="font-display-xl text-headline-lg text-on-surface">
                <AnimatedCounter from={0} to={expValue} isDecimal={expValue % 1 !== 0} />+
              </div>
              <div className="font-code-label text-code-label text-system-red uppercase">Years Exp</div>
            </div>
            <div>
              <div className="font-display-xl text-headline-lg text-on-surface">
                <AnimatedCounter from={0} to={10} isDecimal={false} />+
              </div>
              <div className="font-code-label text-code-label text-system-red uppercase">Completed</div>
            </div>
          </div>
        </motion.div>
        
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Tilt
                tiltEnable={!isMobile}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={!isMobile}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                className="h-full"
              >
                <div className="bg-surface-container border border-outline-variant p-8 h-full group hover:border-system-red transition-colors duration-300">
                  <span className="material-symbols-outlined text-system-red mb-4 text-4xl">
                    {getIconForDomain(item.name)}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.name}</h3>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
