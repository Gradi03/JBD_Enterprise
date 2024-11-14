// src/pages/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  return (
    <div id='testimonials' className="bg-light min-h-screen p-8">
      {/* Title Section */}
      <motion.h1
        className="text-4xl text-primary font-semibold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h1>

      {/* Testimonials Section */}
      <motion.div
        className="space-y-8 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Testimonial 1 */}
        <motion.div
          className="testimonial bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-lg text-primary italic">
            "The lessons were so insightful and the instructor was very patient. I feel much more confident with my drumming."
          </p>
          <p className="mt-4 text-sm text-secondary">- Sarah, Beginner Drummer</p>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div
          className="testimonial bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-lg text-primary italic">
            "JBD Enterprise helped me organize a successful event. The musicians were top-notch, and everything ran smoothly!"
          </p>
          <p className="mt-4 text-sm text-secondary">- John, Event Organizer</p>
        </motion.div>

        {/* Testimonial 3 */}
        <motion.div
          className="testimonial bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-lg text-primary italic">
            "Great music production services! They really brought my vision to life and were professional throughout."
          </p>
          <p className="mt-4 text-sm text-secondary">- Mike, Music Artist</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
