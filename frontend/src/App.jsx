// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
// import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
