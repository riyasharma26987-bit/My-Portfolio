import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="about" />
        <h2 className="section-title">
          My <span className="gradient-text">Story.</span>
        </h2>
      </div>
      
      <div className={styles.sideBySide}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.paragraph}>
            I am a driven AI & Machine Learning student passionate about the intersection of scalable software engineering and intelligent systems. I don't just train models; I build production-ready applications that bring those models to life.
          </p>
          <p className={styles.paragraph}>
            Currently rigorously preparing for GATE CSE to solidify my theoretical foundation in Data Structures, Algorithms, Operating Systems, and DBMS, ensuring my code is not just functional, but highly optimized.
          </p>
        </motion.div>

        <motion.div 
          className={styles.graphicContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Abstract graphic representing About */}
          <div className={styles.glassCard}>
             <div className={styles.abstractBlob}></div>
             <h3>Focus Areas</h3>
             <ul className={styles.focusList}>
               <li>🚀 Scalable Backend Architecture</li>
               <li>🧠 Deep Learning & NLP</li>
               <li>⚡ High-Performance Computing</li>
             </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
