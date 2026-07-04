import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const Education = () => {
  return (
    <section id="education" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="education" />
        <h2 className="section-title">
          Academic <span className="gradient-text">Excellence.</span>
        </h2>
      </div>

      <div className={`${styles.sideBySide} ${styles.reverse}`}>
        
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.paragraph}>
            My academic journey at GLA University is defined by a rigorous pursuit of both theoretical computer science and practical machine learning applications.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>B.Tech in AI & Machine Learning</h3>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-sky)', marginBottom: '1rem' }}>GLA University | 2021 - 2025</h4>
            <p className={styles.paragraph}>
              <strong>Key Coursework:</strong> Deep Learning, Algorithms, Operating Systems, Advanced Database Systems, and Distributed Computing.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.graphicContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.glassCard} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>CGPA</h3>
            <div className="gradient-text" style={{ fontSize: '3rem', fontWeight: '800' }}>[9.X]</div>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Top 5% of the class</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
