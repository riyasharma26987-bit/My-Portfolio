import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.section} style={{ paddingBottom: '12rem', textAlign: 'center' }}>
      <SectionBadge type="contact" />
      <h2 className="section-title">
        Let's <span className="gradient-text">Connect.</span>
      </h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
        Currently seeking internship and full-time opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <motion.div 
        className={styles.glassCard}
        style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a 
          href="mailto:riya.sharma@example.com" 
          style={{ 
            padding: '1rem 3rem', 
            background: 'linear-gradient(135deg, var(--primary-sky), var(--secondary-cyan))',
            color: 'white',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1.2rem',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          Say Hello
        </a>

        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          {['LinkedIn', 'GitHub', 'LeetCode'].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-soft)',
                color: 'var(--primary-sky)',
                fontWeight: '600',
                fontSize: '0.8rem'
              }}
              whileHover={{ y: -5, backgroundColor: 'var(--primary-sky)', color: 'white' }}
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
