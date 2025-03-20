import React from "react";
import { motion } from "framer-motion";
import howtouse from "../assets/images/howtouse.png";

function HowToUse() {
  return (
    <div className="flex flex-col bg-white">
      {/* Animated Heading */}
      <motion.div
        className="flex flex-row justify-center items-center pt-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <span className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase text-gray-300 opacity-20 mr-2 sm:mr-4 whitespace-nowrap">
          how to use
        </span>

        <span className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase text-black mx-2 sm:mx-4 whitespace-nowrap">
          how to use
        </span>

        <span className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase text-gray-300 opacity-20 ml-2 sm:ml-4 whitespace-nowrap">
          how to use
        </span>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        className="md:h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={howtouse}
          alt="how to use"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}

export default HowToUse;
