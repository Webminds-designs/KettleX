import React from "react";
import { motion } from "framer-motion";
import kettle from '../assets/images/kettle.png';

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold tracking-widest text-black mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        ABOUT US
      </motion.h2>

      {/* Body Text */}
      <motion.p
        className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold leading-relaxed text-gray-400 max-w-7xl"
        initial={{ opacity: 0.4, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        DESIGNED TO{" "}
        <span className="font-bold text-black">SEAMLESSLY</span> INTEGRATE INTO YOUR
        DAILY ROUTINE. EXPERIENCE THE CONVENIENCE OF{" "}
        <span className="font-bold text-black">CUTTING-EDGE ELECTRIC</span> APPLIANCES
        THAT SIMPLIFY EVERYDAY TASKS, MAKING LIFE EASIER, MORE EFFICIENT, AND
        EFFORTLESSLY ENJOYABLE.
      </motion.p>

      {/* Image */}
      <motion.img
        className="mt-10 w-[34rem]"
        src={kettle}
        alt="kettle"
        initial={{ opacity: 0.5, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      />
    </section>
  );
};

export default AboutUs;
