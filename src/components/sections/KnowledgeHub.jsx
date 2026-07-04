import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';

const KnowledgeHub = () => {
  const articles = [
    {
      title: "Deep Learning Mathematics Cheat Sheet",
      category: "Study Notes",
      readTime: "5 min read",
      desc: "A comprehensive breakdown of backpropagation calculus and linear algebra for neural networks."
    },
    {
      title: "System Design Patterns for Scalable APIs",
      category: "Architecture",
      readTime: "8 min read",
      desc: "An exploration of microservices, event-driven architecture, and load balancing strategies."
    },
    {
      title: "GATE CSE Preparation Strategy 2025",
      category: "Mentorship",
      readTime: "12 min read",
      desc: "My rigorous schedule and resource list for mastering core Computer Science concepts."
    }
  ];

  return (
    <section id="knowledge" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="articles" />
        <h2 className="section-title">
          Knowledge <span className="gradient-text">Hub.</span>
        </h2>
      </div>

      <div className={styles.grid} style={{ marginTop: '4rem' }}>
        {articles.map((article, idx) => (
          <motion.div 
            key={idx}
            className={styles.glassCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: '600' }}>
              <span style={{ color: 'var(--primary-sky)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{article.category}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{article.readTime}</span>
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>
              {article.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>
              {article.desc}
            </p>
            
            <a href="#" style={{ color: 'var(--primary-sky)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Read Article <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeHub;
