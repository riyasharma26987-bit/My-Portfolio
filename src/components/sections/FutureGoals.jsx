import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const FutureGoals = () => {
  const goals = [
    { label: "Master AI Algorithms", y: 200, x: -150 },
    { label: "Top FAANG Internship", y: 120, x: 100 },
    { label: "Publish Research", y: 40, x: -80 },
    { label: "Build Products for Millions", y: -40, x: 50 },
  ];

  return (
    <section id="future" className={styles.section} style={{ minHeight: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionBadge type="future" />
      <h2 className="section-title">
        The <span className="gradient-text">Destination.</span>
      </h2>

      {/* Mountain Peak / Upward Journey Visualization */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '500px', marginTop: '3rem' }}>
        
        {/* Abstract Mountain SVG */}
        <svg viewBox="0 0 400 400" style={{ position: 'absolute', bottom: 0, width: '100%', opacity: 0.5 }}>
          <motion.path 
            d="M 0 400 L 200 100 L 400 400 Z" 
            fill="url(#mountainGrad)" 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1.5 }}
          />
          <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--primary-sky)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Goal Nodes (Diamonds) */}
        {goals.map((goal, idx) => (
          <motion.div
            key={idx}
            className={styles.glassCard}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '180px',
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontWeight: '600',
              color: 'var(--text-primary)',
              borderRadius: '20px', // slightly rounded diamond corners
              transform: `translate(-50%, -50%) rotate(45deg)`
            }}
            initial={{ opacity: 0, x: 0, y: 300, rotate: 45 }} // Start from bottom
            whileInView={{ 
              opacity: 1, 
              x: goal.x, 
              y: goal.y,
              rotate: 45
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: idx * 0.3, type: 'spring' }}
            whileHover={{ scale: 1.1, zIndex: 10, rotate: 45 }}
          >
            <div style={{ transform: 'rotate(-45deg)', padding: '1rem' }}>
              {goal.label}
            </div>
          </motion.div>
        ))}

        {/* The Peak Flag */}
        <motion.div
          style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', fontSize: '3rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, type: 'spring' }}
        >
          🚀
        </motion.div>
      </div>
    </section>
  );
};

export default FutureGoals;
