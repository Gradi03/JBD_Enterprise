import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';  // Import ScrollLink from react-scroll

function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info Section */}
          <div className="text-start md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">JBD Enterprise</h3>
            <p className="text-sm mb-4 text-accent">Your trusted partner for quality services and innovative solutions.</p>
            <p className="text-lg font-semibold mb-2 text-white">Contact Me:</p>
            <div className="flex justify-start md:justify-start items-center space-x-3 mb-3">
              <FaEnvelope size={20} className="text-accent" />
              <a href="mailto:jeremiebluesdrummer@gmail.com" className="text-sm text-accent cusor-pointer">jeremiebluesdrummer@gmail.com</a>
            </div>
            <div className="flex justify-start md:justify-start items-center space-x-3">
              <FaPhoneAlt size={20} className="text-accent" />
              <a href="tel:+27678902537" className="text-sm text-accent cusor-pointer">+27 67 890 2537</a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="text-start md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-2 text-accent">
              <li><ScrollLink to="about" smooth={true} duration={500} className="text-sm hover:text-[#F1F1F1] cursor-pointer">About</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} className="text-sm hover:text-[#F1F1F1] cursor-pointer">What I do</ScrollLink></li>
              <li><ScrollLink to="gallery" smooth={true} duration={500} className="text-sm hover:text-[#F1F1F1] cursor-pointer">Gallery</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} className="text-sm hover:text-[#F1F1F1] cursor-pointer">Contact</ScrollLink></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-start md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Follow Me</h3>
            <div className="flex justify-start md:justify-start space-x-6">
              <a href="https://www.facebook.com/jeremiebluesdrummer7" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/tonton_miracle/?hl=en" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jeremie-bonzembo-b087b0209/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://www.youtube.com/@jeremiebluesdrummer/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition duration-300 ">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center text-sm">
          <p>&copy; 2024 JBD Enterprise. All rights reserved.</p>
        </div>
        
        {/* Created By Section */}
        <div className="mt-4 text-center text-sm text-accent">
          <p>Created by <a href="https://ninjatechdesign.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ninja Design Pro</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
