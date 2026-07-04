import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';
import expStyles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      role: "AI Research Assistant",
      company: "GLA University",
      date: "2023 - Present",
      description: "Working under the guidance of Dr. X on optimizing deep learning inference times for edge devices. Published a paper on model quantization in a top-tier IEEE conference.",
      impact: ["Reduced inference latency by 40%", "Co-authored 1 IEEE publication"]
    },
    {
      role: "Open Source Contributor",
      company: "TensorFlow / Hugging Face",
      date: "2022 - 2023",
      description: "Contributed to core machine learning libraries, focusing on fixing critical memory leak issues in the data loading pipeline.",
      impact: ["Merged 5+ PRs into main", "Optimized data pipeline memory by 15%"]
    }
  ];

  return (
    <section id="experience" className={styles.section}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionBadge type="experience" />
        <h2 className="section-title">
          Engineering <span className="gradient-text">Impact.</span>
        </h2>
      </div>

      <div className={expStyles.timelineContainer}>
        <div className={expStyles.timelineLine}></div>
        
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            className={expStyles.timelineItem}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={expStyles.timelineDot}></div>
            <div className={`${styles.glassCard} ${expStyles.timelineCard}`}>
              <span className={expStyles.date}>{exp.date}</span>
              <h3 className={expStyles.role}>{exp.role}</h3>
              <h4 className={expStyles.company}>{exp.company}</h4>
              <p className={expStyles.description}>{exp.description}</p>
              
              <ul className={expStyles.impactList}>
                {exp.impact.map((point, i) => (
                  <li key={i}><span>📈</span> {point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
