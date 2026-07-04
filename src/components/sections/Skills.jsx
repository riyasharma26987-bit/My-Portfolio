import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';
import skillsStyles from './Skills.module.css';

const Skills = () => {
  const coreSkills = [
    "Python", "C++", "Java", "TensorFlow", "PyTorch", "SQL", "React", "Linux"
  ];

  return (
    <section id="skills" className={styles.section}>
      <SectionBadge type="skills" />
      <h2 className="section-title">
        Core <span className="gradient-text">Competencies.</span>
      </h2>

      <div className={skillsStyles.skillsContainer}>
        <div className={skillsStyles.orbitalMap}>
          
          <div className={skillsStyles.centerNode}>
            <span className="gradient-text">AI / ML</span>
          </div>

          {/* Render orbiting skill nodes */}
          {coreSkills.map((skill, index) => {
            const angle = (index / coreSkills.length) * Math.PI * 2;
            const radius = 180; // Distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={skill}
                className={skillsStyles.skillNode}
                style={{ x: 0, y: 0 }}
                animate={{ 
                  x: [0, x, x + (Math.random() * 20 - 10)], 
                  y: [0, y, y + (Math.random() * 20 - 10)] 
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeOut",
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2
                  },
                  x: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2
                  }
                }}
              >
                {skill}
              </motion.div>
            );
          })}
          
          {/* Orbital rings */}
          <div className={skillsStyles.orbitRing} style={{ width: 360, height: 360 }}></div>
          <div className={skillsStyles.orbitRing} style={{ width: 250, height: 250, borderStyle: 'dashed' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
