import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const AIExpertise = () => {
  const expertiseAreas = [
    { name: "Deep Learning", desc: "CNNs, RNNs" },
    { name: "Computer Vision", desc: "Object Detection" },
    { name: "NLP", desc: "LLMs, Sentiment" },
    { name: "Generative AI", desc: "Stable Diffusion" },
    { name: "Data Engineering", desc: "ETL Pipelines" }
  ];

  return (
    <section id="ai-expertise" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="ai" />
        <h2 className="section-title">
          AI <span className="gradient-text">Expertise.</span>
        </h2>
      </div>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '800px', 
        height: '600px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        {/* Central Hub */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'var(--primary-sky)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          boxShadow: '0 0 30px rgba(56, 189, 248, 0.4)',
          zIndex: 10
        }}>
          AI/ML
        </div>

        {/* Orbit Rings */}
        <div style={{ position: 'absolute', width: '350px', height: '350px', border: '1px dashed rgba(56, 189, 248, 0.3)', borderRadius: '50%', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', width: '550px', height: '550px', border: '1px solid rgba(56, 189, 248, 0.1)', borderRadius: '50%', zIndex: 1 }}></div>

        {expertiseAreas.map((area, index) => {
          // Calculate positions in a circle
          const angle = (index / expertiseAreas.length) * Math.PI * 2 - Math.PI / 2; // Start from top
          const radius = 220; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div 
              key={index}
              className={styles.glassCard}
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x, y }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
              style={{ 
                position: 'absolute',
                width: '180px', 
                height: '180px', 
                borderRadius: '50%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '1.5rem',
                textAlign: 'center',
                zIndex: 5,
                background: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: '1.2' }}>{area.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4' }}>{area.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AIExpertise;
