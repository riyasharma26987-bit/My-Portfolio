import React from 'react';
import { motion } from 'framer-motion';

// Components
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import AIExpertise from '../components/sections/AIExpertise';
import TechStack from '../components/sections/TechStack';
import ProblemSolving from '../components/sections/ProblemSolving';

const AchievementsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px' }}
      className="container"
    >
      <Experience />
      <Education />
      <ProblemSolving />
      <AIExpertise />
      <TechStack />
    </motion.div>
  );
};

export default AchievementsPage;
