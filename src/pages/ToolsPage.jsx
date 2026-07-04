import React from 'react';
import { motion } from 'framer-motion';

// Components
import StudyTracker from './StudyTracker';

const ToolsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px', minHeight: '100vh' }}
      className="container"
    >
      <StudyTracker />
    </motion.div>
  );
};

export default ToolsPage;
