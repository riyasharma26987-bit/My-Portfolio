import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="problem-solving" />
        <h2 className="section-title">
          Algorithmic <span className="gradient-text">Engineering.</span>
        </h2>
      </div>

      <div className={styles.sideBySide} style={{ marginTop: '4rem' }}>
        
        {/* LeetCode / DSA Stats */}
        <motion.div 
          className={styles.glassCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Data Structures & Algorithms</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ position: 'relative', width: '150px', height: '150px' }}>
              <svg width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="60" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="12" />
                <motion.circle 
                  cx="75" cy="75" r="60" 
                  fill="none" 
                  stroke="var(--primary-sky)" 
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="377" // 2 * PI * 60
                  initial={{ strokeDashoffset: 377 }}
                  whileInView={{ strokeDashoffset: 100 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
              </svg>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: '1' }}>350+</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Solved</span>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.85rem', fontWeight: '600', color: '#10b981' }}>
                  <span>Easy</span><span>150</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '3px' }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#10b981', borderRadius: '3px' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.85rem', fontWeight: '600', color: '#f59e0b' }}>
                  <span>Medium</span><span>150</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '3px' }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.1 }} style={{ height: '100%', background: '#f59e0b', borderRadius: '3px' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.85rem', fontWeight: '600', color: '#ef4444' }}>
                  <span>Hard</span><span>50</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '3px' }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '20%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#ef4444', borderRadius: '3px' }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* System Design */}
        <motion.div 
          className={styles.graphicContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.glassCard} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>System Architecture</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Writing algorithms is only half the battle. I focus heavily on how those algorithms scale in production environments.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚖️</span>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Load Balancing</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Traffic distribution</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</span>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Caching Strategies</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Redis & Memcached</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>📡</span>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Event-Driven</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Kafka & RabbitMQ</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>🗄️</span>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Database Scaling</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Sharding & Replication</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;
