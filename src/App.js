// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/WhyChooseUs';
import Fleet from './pages/Fleet';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { LanguageProvider } from './LanguageContext';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;