import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-black px-6 md:px-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Column: Newsletter */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">NEWSLETTER SUBS</h2>
            {/* Email input + Arrow button */}
            <div className="flex items-center border-b border-gray-300 max-w-sm mb-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-none px-3 py-2 flex-grow focus:outline-none"
              />
              <button className="text-black px-4 py-2 ml-2">&rarr;</button>
            </div>
            {/* Newsletter text */}
            <p className="mb-4">
              Get The Latest Updates, Offers, And Smart Living Tips — Straight
              To Your Inbox.
            </p>
          </motion.div>

          {/* Right Column: Links + Social Icons */}
          <motion.div
            className="md:w-1/2 flex flex-col items-start md:items-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Top row of links */}
            <div className="flex space-x-6 mb-4">
              <a href="#" className="hover:underline text-gray-400">
                HOME
              </a>
              <a href="#" className="hover:underline text-gray-400">
                ABOUT US
              </a>
            </div>

            {/* Second row of links */}
            <div className="flex space-x-6 mb-4">
              <a href="#" className="hover:underline text-gray-400">
                INFO
              </a>
              <a href="#" className="hover:underline text-gray-400">
                CONTACT US
              </a>
              <a href="#" className="hover:underline text-gray-400">
                BLOG
              </a>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="p-2 border rounded-full hover:bg-gray-100">
                <FaInstagram />
              </div>
              <div className="p-2 border rounded-full hover:bg-gray-100">
                <FaTwitter />
              </div>
              <div className="p-2 border rounded-full hover:bg-gray-100">
                <FaYoutube />
              </div>
              <div className="p-2 border rounded-full hover:bg-gray-100">
                <FaTiktok />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          className="my-6 border-gray-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section: Privacy, Terms, Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms &amp; Conditions
            </a>
          </div>
          <p className="text-sm">© 2025 All Rights Reserved</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;