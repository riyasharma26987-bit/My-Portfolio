import React from 'react';
import { motion } from 'framer-motion';
import styles from './Sections.module.css';

const WhyHireMe = () => {
  const reasons = [
    {
      icon: "🧠",
      title: "Deep CS Fundamentals",
      desc: "Beyond syntax. I understand memory management, algorithm complexity, and how data structures scale in production."
    },
    {
      icon: "🏗️",
      title: "Product-First Mindset",
      desc: "I don't just write code; I solve problems. I build tools that are useful, user-friendly, and maintainable."
    },
    {
      icon: "⚡",
      title: "Fast Learner",
      desc: "Adapting to new tech stacks quickly is my superpower. I thrive in environments that challenge my current knowledge boundaries."
    }
  ];

  return (
    <section className={styles.section} style={{ padding: '4rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title">
          Why <span className="gradient-text">Hire Me.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            className={styles.glassCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              {reason.icon}
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{reason.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyHireMe;
