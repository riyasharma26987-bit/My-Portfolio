import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../Badges/SectionBadge';
import styles from './Sections.module.css';
import projectStyles from './Projects.module.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Distributed AI Inference Engine",
      description: "A highly scalable microservices architecture built to distribute machine learning inference across multiple edge nodes, reducing latency by 45%.",
      tech: ["Python", "TensorFlow", "Kubernetes", "gRPC", "Go"],
      type: "Architecture & Machine Learning"
    },
    {
      title: "Real-Time NLP Knowledge Graph",
      description: "Extracts entities and relationships from real-time financial news streams to dynamically build a queryable knowledge graph for algorithmic trading signals.",
      tech: ["PyTorch", "Neo4j", "Kafka", "React", "FastAPI"],
      type: "Data Engineering & NLP"
    }
  ];

  return (
    <section id="projects" className={styles.section}>
      <SectionBadge type="projects" />
      <h2 className="section-title">
        Featured <span className="gradient-text">Engineering.</span>
      </h2>

      <div className={projectStyles.projectList}>
        {featuredProjects.map((project, idx) => (
          <motion.div 
            key={idx}
            className={projectStyles.projectShowcase}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={projectStyles.projectInfo}>
              <span className={projectStyles.projectType}>{project.type}</span>
              <h3 className={projectStyles.projectTitle}>{project.title}</h3>
              <p className={projectStyles.projectDesc}>{project.description}</p>
              
              <div className={projectStyles.techStack}>
                {project.tech.map(t => <span key={t} className={projectStyles.techPill}>{t}</span>)}
              </div>
              
              <div className={projectStyles.projectLinks}>
                <a href="#" className={projectStyles.linkBtn}>View Architecture</a>
                <a href="#" className={projectStyles.linkBtnAlt}>GitHub Repo</a>
              </div>
            </div>
            
            <div className={projectStyles.projectVisual}>
              <div className={projectStyles.visualPlaceholder}>
                <div className={projectStyles.floatingElement}></div>
                <div className={projectStyles.floatingElement2}></div>
                <span>Premium App Interface</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
