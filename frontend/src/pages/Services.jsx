import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaDrum, FaCalendarAlt, FaHeadphones } from 'react-icons/fa'; // Importing relevant icons

function Services() {
  return (
    <div id="services" className="bg-gray-50 min-h-screen p-8 flex flex-col items-center justify-center">
      {/* Title Section */}
      <motion.h1
        className="text-4xl sm:text-5xl text-[#2D2D2D] font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of element is in view
      >
        What I do
      </motion.h1>

      {/* Services List */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Music Production Service */}
        <motion.div
          className="service-item bg-white p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaMusic className="text-4xl text-[#2D2D2D] mb-4" />
          <h3 className="text-2xl text-[#2D2D2D] font-semibold mb-4">Music Production</h3>
          <p className="text-lg text-[#2D2D2D]">
            I offer full-service music production from concept to final mix, including live recordings and studio production. I ensure a seamless experience from start to finish.
          </p>
        </motion.div>

        {/* Drum Lessons Service */}
        <motion.div
          className="service-item bg-white p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaDrum className="text-4xl text-[#2D2D2D] mb-4" />
          <h3 className="text-2xl text-[#2D2D2D] font-semibold mb-4">Drum Lessons</h3>
          <p className="text-lg text-[#2D2D2D]">
            I offer personalized drum lessons for all skill levels, available both online and in-person. You’ll learn theory, technique, and performance skills in a practical setting, allowing you to improve at your own pace!
          </p>
        </motion.div>

        {/* Event Management Service */}
        <motion.div
          className="service-item bg-white p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FaCalendarAlt className="text-4xl text-[#2D2D2D] mb-4" />
          <h3 className="text-2xl text-[#2D2D2D] font-semibold mb-4">Event Management</h3>
          <p className="text-lg text-[#2D2D2D]">
            I provide comprehensive event management services, including venue coordination, sound engineering, and performance setups. I ensure every detail is perfectly executed to make your event a success.
          </p>
        </motion.div>

        {/* Music Advisor Service */}
        <motion.div
          className="service-item bg-white p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <FaHeadphones className="text-4xl text-[#2D2D2D] mb-4" />
          <h3 className="text-2xl text-[#2D2D2D] font-semibold mb-4">Music Advisor</h3>
          <p className="text-lg text-[#2D2D2D]">
            I offer personalized music advice, helping you navigate your musical journey. Whether you're a budding artist or a seasoned professional, I can guide you through music theory, composition, and performance techniques to enhance your skills and artistry.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
