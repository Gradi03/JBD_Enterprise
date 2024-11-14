import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi'; // Heroicons library for a beautiful down arrow

function Home() {
  // Function to scroll to the next section 
  const scrollToAbout = () => {
    const nextSection = document.getElementById('about'); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="home" 
      className="bg-primary min-h-screen flex flex-col items-center justify-center text-center px-4 py-8"
      style={{
        backgroundImage: 'url(/images/heroes.png)', // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <motion.h1
        className="text-5xl font-bold text-primary mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to JBD Enterprise
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-2xl sm:text-2xl font-bold text-accent max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
  If you can hold a stick, we can make it work. Let's unlock your drumming potential!
  </motion.p>

      {/* Scroll Down Icon */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Scroll Down Icon */}
        <motion.div
          onClick={scrollToAbout} // Scroll to next section on click
          className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-white shadow-lg cursor-pointer hover:bg-accent hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.2 }}  // Hover effect for scale
          whileTap={{ scale: 0.95 }}  // Tap effect for slight shrink
        >
          <HiArrowDown size={30} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
