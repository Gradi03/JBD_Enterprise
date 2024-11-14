import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

export default function Contact() {
  const [result, setResult] = useState(""); // State to store result messages

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Append the access_key directly into the form data
    formData.append("access_key", "82fedde2-0347-4e8f-9180-6e41a1423394"); // Your Web3Forms API key

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Handle API response
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset(); // Reset the form after submission

        // Show SweetAlert on success
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#3085d6',
        });
      } else {
        setResult(data.message); // Show error message if submission fails
        Swal.fire({
          title: 'Error!',
          text: data.message || 'There was an issue submitting the form.',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#d33',
        });
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#d33',
      });
      console.error("Error:", error);
    }
  };

  return (
    <div id="contact" className="contact-form-container">
      {/* Title Section */}
      <motion.h1
        className="text-4xl text-primary font-semibold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
      >
        Contact Me
      </motion.h1>

      {/* Form Section */}
      <motion.form
        onSubmit={onSubmit}
        className="contact-form max-w-lg mx-auto bg-white p-8 shadow-xl rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Name Input */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <label htmlFor="name" className="block text-lg text-primary font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <label htmlFor="email" className="block text-lg text-primary font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </motion.div>

        {/* Phone Number Input (Optional) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <label htmlFor="phone" className="block text-lg text-primary font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone" 
            required
            placeholder="Enter your phone number"
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </motion.div>

        {/* Message Input */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <label htmlFor="message" className="block text-lg text-primary font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message" 
            required
            placeholder="Enter your message"
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </motion.div>

        {/* Hidden input for access key */}
        <input
          type="hidden"
          name="access_key"
          value="82fedde2-0347-4e8f-9180-6e41a1423394" 
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full py-3 mt-6 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Submit Form
        </motion.button>
      </motion.form>

      {/* Result Message (Feedback after form submission) */}
      {result && (
        <motion.p
          className="text-center mt-4 font-semibold text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {result}
        </motion.p>
      )}
    </div>
  );
}
