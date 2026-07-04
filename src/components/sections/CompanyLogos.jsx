import React from 'react';
import styles from './CompanyLogos.module.css';

const CompanyLogos = () => {
  const logos = [
    "Google", "Amazon", "TensorFlow", "Hugging Face", "IEEE", "GLA University",
    "OpenAI", "Meta", "PyTorch"
  ];

  return (
    <section className={styles.logoSection}>
      <p className={styles.trustText}>TECHNOLOGIES & ECOSYSTEMS I BUILD WITH</p>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Double the array for seamless infinite scroll */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={styles.logoItem}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
