import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className={`p-4 fixed top-0 w-full z-10 transition-all duration-300 ease-in-out shadow-lg ${
        scrolling ? "bg-opacity-80" : "bg-opacity-90"
      }`}
      style={{
        backgroundColor: "#00A9E0", // Transparent dark gray (rgba format)
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Link */}
        <div className="flex items-center space-x-2">
          <Link
            to="home" // Ensure this matches the ID of the Home section
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img
              src="/images/jb.png" // Path to the logo image inside the public folder
              alt="JBD Enterprise Logo"
              className="h-10" // Adjust the height of the logo (you can change this value)
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-light hover:text-primary focus:outline-none" // Blue on hover
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            What I do
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden p-4" style={{ backgroundColor: "#00A9E0" }}>
          <ul className="space-y-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="block text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                What I do
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                className="block text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block text-light hover:text-primary transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </motion.nav>
  );
}

export default Navbar;
