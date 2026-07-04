import React from 'react';
import { motion } from 'framer-motion';

// Components
import Hero from '../components/Hero/Hero';
import VideoDemos from '../components/sections/VideoDemos';
import CompanyLogos from '../components/sections/CompanyLogos';
import LiveAiPlayground from '../components/sections/LiveAiPlayground';
import WhyHireMe from '../components/sections/WhyHireMe';
import Projects from '../components/sections/Projects';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="container">
        <VideoDemos />
      </div>
      
      {/* Logos span full width */}
      <CompanyLogos />
      
      <div className="container" style={{ marginTop: '4rem' }}>
        <WhyHireMe />
        <LiveAiPlayground />
        <Projects />
      </div>
    </motion.div>
  );
};

export default Home;
