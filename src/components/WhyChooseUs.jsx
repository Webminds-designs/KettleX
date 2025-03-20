import React from "react";
import { motion } from "framer-motion";
import image1 from '../assets/images/image.png';
import image2 from '../assets/images/image-1.png';
import image3 from '../assets/images/image-2.png';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div 
        className="flex flex-col md:flex-row items-center justify-between mb-10"
        initial={{ opacity: 0.5, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}

        >
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            WHY CHOOSE US
          </h2>
          
          <button
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Get Started
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[image1, image2, image3].map((img, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start"
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img
                src={img}
                alt={`Feature ${index + 1}`}
                className="mb-4 w-full h-[100vh] object-cover rounded-3xl"
              />
              <h3 className="text-xl font-semibold mb-2">
                {index === 0
                  ? "PRECISE TEMPERATURE CONTROL"
                  : index === 1
                  ? "SLEEK & DURABLE DESIGN"
                  : "WIDE OPENING FOR EASY FILL & CLEAN"}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {index === 0
                  ? "Select from multiple temperature settings for the perfect brew, displayed on a sleek LCD screen."
                  : index === 1
                  ? "Modern matte black finish with an ergonomic handle, designed for effortless pouring and style."
                  : "Designed for effortless pouring, refilling, and cleaning—no spills, no mess."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
