import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../components/Badges/SectionBadge';
import styles from '../components/sections/Sections.module.css';

const initialTopics = [
  { id: '1', title: 'Arrays & Strings (Two Pointers, Sliding Window)', completed: false, category: 'DSA' },
  { id: '2', title: 'Linked Lists (Fast/Slow pointers)', completed: false, category: 'DSA' },
  { id: '3', title: 'Trees & Graphs (DFS, BFS, Topological Sort)', completed: false, category: 'DSA' },
  { id: '4', title: 'Dynamic Programming (Knapsack, LCS)', completed: false, category: 'DSA' },
  { id: '5', title: 'Operating Systems (Processes, Threads, Deadlocks)', completed: false, category: 'GATE' },
  { id: '6', title: 'Database Management Systems (Normalization, SQL)', completed: false, category: 'GATE' },
  { id: '7', title: 'Computer Networks (OSI Model, TCP/IP)', completed: false, category: 'GATE' }
];

const StudyTracker = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('riya-study-tracker');
    if (saved) {
      setTopics(JSON.parse(saved));
    } else {
      setTopics(initialTopics);
    }
  }, []);

  const toggleTopic = (id) => {
    const updated = topics.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTopics(updated);
    localStorage.setItem('riya-study-tracker', JSON.stringify(updated));
  };

  const progress = topics.length > 0 ? Math.round((topics.filter(t => t.completed).length / topics.length) * 100) : 0;

  return (
    <section className={styles.section} style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="research" />
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Study <span className="gradient-text">Tracker.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px' }}>
          Use this interactive tracker to monitor your progress through core CS fundamentals. Your progress is saved locally in your browser!
        </p>
      </div>

      <div className={styles.glassCard} style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>Core Fundamentals</h3>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-sky)' }}>{progress}%</span>
        </div>
        
        {/* Progress Bar */}
        <div style={{ width: '100%', height: '8px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '4px', marginBottom: '2rem', overflow: 'hidden' }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            style={{ height: '100%', background: 'var(--primary-sky)', borderRadius: '4px' }}
          />
        </div>

        {/* Topics List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {topics.map((topic) => (
            <div 
              key={topic.id}
              onClick={() => toggleTopic(topic.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: topic.completed ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${topic.completed ? 'rgba(16, 185, 129, 0.3)' : 'var(--glass-border)'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                border: `2px solid ${topic.completed ? '#10b981' : 'var(--text-secondary)'}`,
                background: topic.completed ? '#10b981' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                {topic.completed && "✓"}
              </div>
              <div style={{ flex: 1, textDecoration: topic.completed ? 'line-through' : 'none', color: topic.completed ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
                {topic.title}
              </div>
              <div style={{
                padding: '0.2rem 0.6rem',
                background: topic.category === 'DSA' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                color: topic.category === 'DSA' ? '#38bdf8' : '#f59e0b',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {topic.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyTracker;
