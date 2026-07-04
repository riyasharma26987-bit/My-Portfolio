import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const LeetCode = () => {
  return (
    <section id="leetcode" className={styles.section}>
      <SectionBadge type="leetcode" />
      <h2 className="section-title">
        Algorithmic <span className="gradient-text">Mastery.</span>
      </h2>

      <div className={styles.sideBySide}>
        <motion.div 
          className={styles.glassCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}
        >
          <div style={{ textAlign: 'center' }}>
            {/* Animated SVG Circle for total solved */}
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="15" />
              <motion.circle 
                cx="100" cy="100" r="80" 
                fill="none" 
                stroke="var(--primary-sky)" 
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray="502" // 2 * PI * 80
                initial={{ strokeDashoffset: 502 }}
                whileInView={{ strokeDashoffset: 150 }} // Adjust based on % solved
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
              />
              <text x="100" y="90" textAnchor="middle" fontSize="3rem" fontWeight="bold" fill="var(--text-primary)">[350]</text>
              <text x="100" y="120" textAnchor="middle" fontSize="1rem" fill="var(--text-secondary)">Solved</text>
            </svg>
          </div>
        </motion.div>

        <motion.div 
          className={styles.graphicContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div className={styles.glassCard} style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Problem Breakdown</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: '#10b981' }}>
                <span>Easy</span><span>[150]</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px' }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#10b981', borderRadius: '4px' }} />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: '#f59e0b' }}>
                <span>Medium</span><span>[150]</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px' }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.1 }} style={{ height: '100%', background: '#f59e0b', borderRadius: '4px' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: '#ef4444' }}>
                <span>Hard</span><span>[50]</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: '20%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#ef4444', borderRadius: '4px' }} />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCode;
