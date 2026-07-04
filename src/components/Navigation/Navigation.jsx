import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Social', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Tools', path: '/tools' },
    { name: 'Knowledge', path: '/knowledge' },
  ];

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span className="gradient-text">Riya.AI</span>
        </div>
        
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => isActive ? styles.active : ''}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button 
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            marginLeft: '2rem',
            color: 'var(--text-primary)'
          }}
          title="Toggle Theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
