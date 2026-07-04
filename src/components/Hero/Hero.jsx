import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={styles.leftContent}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={styles.greeting}>Hi, I'm Riya Sharma</h2>
            <h1 className={styles.title}>
              Engineering <br />
              <span className="gradient-text">Intelligence.</span>
            </h1>
            <p className={styles.subtitle}>
              An aspiring AI & Machine Learning Engineer aiming for FAANG. 
              I build scalable software, train deep neural networks, and solve complex algorithms 
              with clean, production-ready code.
            </p>
            
            <div className={styles.ctaGroup}>
              <a href="#projects" className={styles.btnPrimary}>
                Explore My Work
              </a>
              <a href="/resume.pdf" download className={styles.btnSecondary}>
                Download Profile
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', marginLeft: '1rem' }}>
              <a href="https://linkedin.com/in/riyasharma" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                🔗 LinkedIn
              </a>
              <a href="https://github.com/riyasharma" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                💻 GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <div className={styles.rightContent}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.imageGlow}></div>
            <div className={styles.imageContainer}>
              <img src="/profile.jpg" alt="Riya Sharma" className={styles.profileImage} />
            </div>
            
            {/* Floating ornamental elements */}
            <motion.div 
              className={`${styles.floatingOrb} ${styles.orb1}`}
              animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className={`${styles.floatingOrb} ${styles.orb2}`}
              animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
