import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionBadge.module.css';

const getBadgeContent = (type) => {
  switch (type) {
    case 'home': return { label: 'Home', icon: '☁️', shapeClass: styles.shapeCloud };
    case 'about': return { label: 'About', icon: '✨', shapeClass: styles.shapeBlob };
    case 'education': return { label: 'Education', icon: '🎓', shapeClass: styles.shapeGraduation };
    case 'experience': return { label: 'Experience', icon: '📈', shapeClass: styles.shapeShield };
    case 'skills': return { label: 'Skills', icon: '🔮', shapeClass: styles.shapeCrystal };
    case 'ai': return { label: 'AI Expertise', icon: '🧠', shapeClass: styles.shapeNeural };
    case 'tech': return { label: 'Tech Stack', icon: '🧊', shapeClass: styles.shapeCube };
    case 'problem-solving': return { label: 'Algorithmic Engineering', icon: '⚙️', shapeClass: styles.shapePuzzle };
    case 'projects': return { label: 'Projects', icon: '🚀', shapeClass: styles.shapeRocket };
    case 'videos': return { label: 'Demos', icon: '🎥', shapeClass: styles.shapeScroll };
    case 'articles': return { label: 'Knowledge Hub', icon: '📚', shapeClass: styles.shapeDocument };
    case 'research': return { label: 'Research', icon: '🔬', shapeClass: styles.shapeDocument };
    case 'hackathons': return { label: 'Hackathons', icon: '⚡', shapeClass: styles.shapeShield };
    case 'achievements': return { label: 'Achievements', icon: '🏅', shapeClass: styles.shapeMedal };
    case 'leetcode': return { label: 'LeetCode', icon: '🧩', shapeClass: styles.shapePuzzle };
    case 'journey': return { label: 'Journey', icon: '🛤️', shapeClass: styles.shapePath };
    case 'future': return { label: 'Future Goals', icon: '🧭', shapeClass: styles.shapeCompass };
    case 'resume': return { label: 'Resume', icon: '📜', shapeClass: styles.shapeScroll };
    case 'contact': return { label: 'Contact', icon: '💬', shapeClass: styles.shapeHeart };
    default: return { label: 'Section', icon: '✨', shapeClass: styles.shapeBlob };
  }
};

const SectionBadge = ({ type }) => {
  const { label, icon, shapeClass } = getBadgeContent(type);

  return (
    <motion.div 
      className={`${styles.badgeWrapper} ${shapeClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={styles.badgeContent}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.glow} />
    </motion.div>
  );
};

export default SectionBadge;
