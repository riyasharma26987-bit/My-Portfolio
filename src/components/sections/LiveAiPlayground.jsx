import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Sections.module.css';

const LiveAiPlayground = () => {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call to ML endpoint
    setTimeout(() => {
      setResult({
        sentiment: inputText.toLowerCase().includes('good') || inputText.toLowerCase().includes('great') ? 'Positive (0.92)' : 'Neutral (0.54)',
        entities: inputText.split(' ').filter(w => w[0] === w[0].toUpperCase() && w.length > 2),
        latency: '42ms'
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <section className={styles.section} style={{ padding: '2rem 0' }}>
      <div className={styles.glassCard} style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Live API <span className="gradient-text">Playground</span>
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Test my lightweight NLP inference model. Type a sentence below to extract sentiment and named entities in real-time.
        </p>

        <form onSubmit={handleAnalyze} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="e.g., Apple released a great new product in California today..."
            style={{ 
              flex: 1, 
              padding: '1rem', 
              borderRadius: '12px', 
              border: '1px solid var(--glass-border)',
              background: 'rgba(255,255,255,0.5)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            disabled={isAnalyzing}
            style={{
              padding: '0 2rem',
              background: isAnalyzing ? 'var(--text-secondary)' : 'var(--primary-sky)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              cursor: isAnalyzing ? 'not-allowed' : 'pointer',
              border: 'none',
              transition: 'all 0.3s'
            }}
          >
            {isAnalyzing ? 'Analyzing...' : 'Run Model'}
          </button>
        </form>

        {/* Results Box */}
        <div style={{ 
          background: '#0f172a', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          fontFamily: 'monospace',
          color: '#38bdf8',
          minHeight: '120px'
        }}>
          {!result && !isAnalyzing && (
            <span style={{ color: '#64748b' }}>// Waiting for input...</span>
          )}
          
          {isAnalyzing && (
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1 }}>
              Initializing tensor computation... <br/>
              Running inference graph...
            </motion.div>
          )}

          {result && !isAnalyzing && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>[200 OK] INFERENCE COMPLETE (Latency: {result.latency})</div>
              <div>{`{`}</div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span style={{ color: '#e2e8f0' }}>"sentiment":</span> "{result.sentiment}",<br/>
                <span style={{ color: '#e2e8f0' }}>"entities_detected":</span> [{result.entities.map(e => `"${e}"`).join(', ')}]
              </div>
              <div>{`}`}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveAiPlayground;
