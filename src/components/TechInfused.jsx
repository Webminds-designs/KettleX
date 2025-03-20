import React from "react";
import tech2 from "../assets/images/kettle sizzling.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

const TechInfusedSection = () => {
  return (
    <section className="relative h-auto w-full bg-white py-12 flex flex-col items-center">

      <h1 className="relative z-5 text-5xl sm:text-7xl md:text-8xl text-black tracking-widest lg:text-9xl font-semibold uppercase text-center">
        Tech Infused
      </h1>

      <div className="relative">
        <img
          src={tech2}
          alt="Kettle"
          className="z-10 w-[60rem] -mt-48 relative object-contain"
        />
        
        {/* Circular button at the bottom center with hover animation */}
        <motion.button 
          className="absolute -bottom-6 z-10 left-1/2 transform -translate-x-1/2 w-15 h-15 rounded-full bg-gray-300 flex items-center justify-center transition-colors"
          whileHover={{ 
            scale: 1.2,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
        >
          {/* Example arrow icon */}
          <AiOutlineArrowUp className="w-7 h-7 text-white transform rotate-45" />
        </motion.button>
      </div>
    </section>
  );
};

export default TechInfusedSection;