import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const TechStack = () => {
  const categories = [
    { title: "Languages", items: ["Python", "C++", "Java", "JS"] },
    { title: "AI / ML", items: ["TensorFlow", "PyTorch", "Scikit"] },
    { title: "Cloud", items: ["React", "AWS", "Docker"] },
    { title: "DBs", items: ["Linux", "SQL", "Mongo"] }
  ];

  return (
    <section id="tech-stack" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="tech" />
        <h2 className="section-title">
          Technology <span className="gradient-text">Arsenal.</span>
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
          background: 'var(--secondary-cyan)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
          zIndex: 10
        }}>
          Stack
        </div>

        {/* Orbit Rings */}
        <div style={{ position: 'absolute', width: '400px', height: '400px', border: '1px solid rgba(56, 189, 248, 0.1)', borderRadius: '50%', zIndex: 1 }}></div>

        {categories.map((cat, index) => {
          // Calculate positions in a circle (4 items = 90 degrees apart)
          const angle = (index / categories.length) * Math.PI * 2 - Math.PI / 4; 
          const radius = 200; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div 
              key={index}
              className={styles.glassCard}
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x, y }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: 'spring' }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
              style={{ 
                position: 'absolute',
                width: '190px', 
                height: '190px', 
                borderRadius: '50%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '1.2rem',
                textAlign: 'center',
                zIndex: 5,
                background: 'rgba(255, 255, 255, 0.85)'
              }}
            >
              <h4 style={{ color: 'var(--primary-sky)', marginBottom: '0.8rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.title}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                {cat.items.map(item => (
                  <span key={item} style={{ padding: '0.2rem 0.6rem', background: 'white', borderRadius: '15px', fontSize: '0.75rem', fontWeight: '600', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
