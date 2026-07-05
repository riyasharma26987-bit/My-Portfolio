import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../components/Badges/SectionBadge';
import styles from '../components/sections/Sections.module.css';

const KnowledgePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
    },
    {
      title: "Optimizing Kafka for High-Throughput Streams",
      category: "Data Engineering",
      readTime: "6 min read",
      desc: "Tuning consumer groups and partition strategies for sub-millisecond latency."
    }
  ];

  const filteredArticles = articles.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px', minHeight: '100vh' }}
      className="container"
    >
      <section id="knowledge" className={styles.section}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SectionBadge type="articles" />
          <h2 className="section-title">
            Searchable <span className="gradient-text">Knowledge Base.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px' }}>
            A curated collection of my study notes, architecture deep-dives, and preparation strategies.
          </p>

          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="Search notes (e.g., 'System Design', 'Kafka', 'Deep Learning')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', 
              maxWidth: '600px',
              padding: '1rem 1.5rem', 
              borderRadius: '50px', 
              border: '1px solid var(--glass-border)',
              background: 'rgba(255,255,255,0.6)',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: 'var(--shadow-soft)',
              marginBottom: '4rem'
            }}
          />
        </div>

        <div className={styles.grid}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, idx) => (
              <motion.div 
                key={article.title}
                className={styles.glassCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
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
            ))
          ) : (
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', width: '100%', gridColumn: '1 / -1', padding: '4rem' }}>
              No articles found matching "{searchTerm}".
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default KnowledgePage;
