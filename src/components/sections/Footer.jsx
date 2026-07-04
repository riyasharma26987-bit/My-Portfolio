import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      borderTop: '1px solid rgba(255,255,255,0.1)', 
      marginTop: 'auto',
      background: 'rgba(0,0,0,0.02)'
    }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        Designed & Built by Riya Sharma
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.7 }}>
        Powered by 
        <span style={{ color: '#61DAFB', margin: '0 5px' }}>React 19</span> • 
        <span style={{ color: '#646CFF', margin: '0 5px' }}>Vite</span> • 
        <span style={{ color: '#E91E63', margin: '0 5px' }}>Framer Motion</span> •
        <span style={{ color: '#CA4245', margin: '0 5px' }}>React Router</span> •
        <span style={{ color: '#38BDF8', margin: '0 5px' }}>Vanilla CSS Modules</span>
      </p>
    </footer>
  );
};

export default Footer;
