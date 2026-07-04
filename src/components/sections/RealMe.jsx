import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const RealMe = () => {
  const hobbies = [
    { emoji: "📸", name: "Photography", desc: "Capturing moments and exploring visual aesthetics." },
    { emoji: "🏸", name: "Badminton", desc: "Staying active and competitive on the court." },
    { emoji: "📚", name: "Sci-Fi Reader", desc: "Exploring futuristic worlds and philosophical ideas." },
    { emoji: "☕", name: "Coffee Enthusiast", desc: "Perfecting the art of the pour-over." }
  ];

  return (
    <section className={styles.section} style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="about" />
        <h2 className="section-title">
          The <span className="gradient-text">Real Me.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px' }}>
          I am more than just my code. I believe the best engineers are well-rounded individuals who bring diverse perspectives to their problem-solving.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        {/* Profile Image & Personality Blurb */}
        <motion.div 
          className={styles.glassCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', marginBottom: '2rem', border: '4px solid var(--primary-sky)', boxShadow: 'var(--shadow-float)' }}>
            <img src="/profile.jpg" alt="Riya Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Beyond the IDE
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            While I spend a lot of time writing algorithms and designing systems, I am deeply passionate about the intersection of technology and humanity. 
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            I am driven by curiosity. Whether I'm debugging a complex memory leak or trying to perfect a new badminton serve, I approach challenges with a growth mindset. I believe that empathy and clear communication are just as important as technical prowess.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            My ultimate goal isn't just to work at a FAANG company—it's to build products that genuinely improve people's lives and to foster a culture of mentorship wherever I go.
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {hobbies.map((hobby, idx) => (
            <motion.div 
              key={idx}
              className={styles.glassCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15 }}
              style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
            >
              <div style={{ fontSize: '2.5rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '16px' }}>
                {hobby.emoji}
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{hobby.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{hobby.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RealMe;
