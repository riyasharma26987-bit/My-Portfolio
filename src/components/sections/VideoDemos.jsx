import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const VideoDemos = () => {
  return (
    <section id="demos" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="videos" />
        <h2 className="section-title">
          Live <span className="gradient-text">Demonstrations.</span>
        </h2>
      </div>

      <div className={styles.grid} style={{ marginTop: '4rem' }}>
        
        {/* Demo 1 */}
        <motion.div 
          className={styles.glassCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ padding: '1.5rem' }}
        >
          <div style={{ 
            width: '100%', 
            height: '250px', 
            background: 'linear-gradient(135deg, #1e293b, #0f172a)', 
            borderRadius: '16px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginBottom: '1.5rem'
          }}>
            {/* Play Button Overlay */}
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              <span style={{ color: 'white', fontSize: '1.5rem', marginLeft: '5px' }}>▶</span>
            </div>
            {/* Abstract visualization */}
            <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 60%)', animation: 'spin 10s linear infinite' }}></div>
          </div>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Distributed AI Inference Demo</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>A 60-second walkthrough of the architecture and real-time dashboard of my distributed inference engine.</p>
        </motion.div>

        {/* Demo 2 */}
        <motion.div 
          className={styles.glassCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ padding: '1.5rem' }}
        >
          <div style={{ 
            width: '100%', 
            height: '250px', 
            background: 'linear-gradient(135deg, #334155, #1e293b)', 
            borderRadius: '16px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginBottom: '1.5rem'
          }}>
            {/* Play Button Overlay */}
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              <span style={{ color: 'white', fontSize: '1.5rem', marginLeft: '5px' }}>▶</span>
            </div>
            {/* Abstract visualization */}
            <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(253,224,71,0.15) 0%, transparent 60%)', animation: 'spin 15s linear infinite reverse' }}></div>
          </div>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Real-Time NLP Pipeline</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Tech talk presentation detailing the event-driven architecture using Kafka, Neo4j, and FastAPI.</p>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoDemos;
