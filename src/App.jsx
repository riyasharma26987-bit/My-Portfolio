import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Styles
import './index.css';

// Core Components
import CloudBackground from './components/Background/CloudBackground';
import Navigation from './components/Navigation/Navigation';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import KnowledgePage from './pages/KnowledgePage';
import ToolsPage from './pages/ToolsPage';
import Footer from './components/Sections/Footer';

function App() {
  return (
    <BrowserRouter>
      <CloudBackground />
      <Navigation />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
