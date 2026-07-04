import React from 'react';
import { motion } from 'framer-motion';
import styles from './CloudBackground.module.css';

const CloudBackground = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5
  }));

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.skyGradient}></div>
      
      {/* Soft blurred clouds using CSS radial gradients */}
      <motion.div 
        className={`${styles.cloudLayer} ${styles.cloud1}`}
        animate={{ x: ['-5%', '5%', '-5%'], y: ['-2%', '2%', '-2%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
        className={`${styles.cloudLayer} ${styles.cloud2}`}
        animate={{ x: ['5%', '-5%', '5%'], y: ['2%', '-2%', '2%'] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
        className={`${styles.cloudLayer} ${styles.cloud3}`}
        animate={{ x: ['-2%', '4%', '-2%'], y: ['-5%', '3%', '-5%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [`${p.y}%`, `${p.y - 20}%`, `${p.y}%`],
            x: [`${p.x}%`, `${p.x + (Math.random() > 0.5 ? 5 : -5)}%`, `${p.x}%`],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default CloudBackground;
