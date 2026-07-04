import React from 'react';
import { motion } from 'framer-motion';

// Components
import RealMe from '../components/Sections/RealMe';
import FutureGoals from '../components/Sections/FutureGoals';
import Contact from '../components/Sections/Contact';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px' }}
      className="container"
    >
      <RealMe />
      <FutureGoals />
      <Contact />
    </motion.div>
  );
};

export default AboutPage;
