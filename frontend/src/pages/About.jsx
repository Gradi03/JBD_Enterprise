import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div id="about" className="bg-gray-50 min-h-screen p-8 flex flex-col items-center justify-center">
      {/* Title Section */}
      <motion.h1
        className="text-4xl sm:text-5xl text-[#2D2D2D] font-extrabold text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 50 }} // Start with 0 opacity and a slight offset
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up into position
        transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition with easing
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 w-full max-w-6xl mx-auto">
        
        {/* Image Section with Title at Bottom */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col justify-center items-center rounded-lg shadow-2xl border-2 border-[#2D2D2D] mb-8 md:mb-0"
          initial={{ opacity: 0 }} // Start invisible
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1, delay: 0.5 }} // Smooth fade-in with slight delay
          viewport={{ once: true }} // Trigger animation once when in view
        >
          <img
            src="/images/jeremie.jpg"
            alt="JBD Drum Academy"
            className="w-full rounded-t-lg shadow-xl transition-transform transform hover:scale-105 max-w-xs md:max-w-md lg:max-w-lg"
          />
          <div className="w-full p-4 bg-[#2D2D2D] text-white text-center rounded-b-lg">
            <h3 className="text-xl font-semibold">JBD – Founder/Owner</h3>
            <p className="text-sm font-light">JBD Enterprise & JBD Drum Academy</p>
            <p className="text-xs font-light">Cape Town | July 2020</p>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="w-full md:w-2/3 text-left p-6 md:p-8 bg-white rounded-lg shadow-lg border-2 border-[#2D2D2D]"
          initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and offset to the left
          whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
          transition={{ duration: 1, delay: 0.8 }} // Smooth transition with slight delay
          viewport={{ once: true }} // Trigger animation once when in view
        >
          <p className="text-lg text-[#2D2D2D] mb-6">
            As the founder and owner of JBD Enterprise, I provide comprehensive event and music production services, ensuring seamless experiences for diverse occasions. My expertise includes managing venue arrangements, organizing live recordings with full studio and engineering support, and collaborating with top musicians and backup vocalists to enhance performances.
          </p>
          <p className="text-lg text-[#2D2D2D] mb-6">
            I offer project direction with a clear vision and reliable execution, and serve as a music advisor, bringing together talented artists across genres. Through JBD Drum Academy, I’m dedicated to making quality drum education accessible to all skill levels, offering both online and in-person lessons that cover theoretical and practical aspects of drumming.
          </p>
          <p className="text-lg text-[#2D2D2D] mb-6">
            With a focus on accessibility, I provide free classes based on academy schedules and seasonal offerings, and I’m committed to nurturing emerging talent through personalized coaching and mentorship for beginners to intermediate musicians.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
