import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import kettleBig from "../../public/images/kettleBig.png";
import kettleSmall from "/images/kettleSmall.png";
import lid from "/images/lid.png";

const LidSection = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Big Kettle Image as Background */}
        <div
          className="w-full h-auto bg-no-repeat bg-center relative bg-contain mb-5"
          style={{
            backgroundImage: `url(${kettleBig})`,
            paddingTop:
              "56.25%" /* This creates a 16:9 aspect ratio container */,
            backgroundSize: "contain",
          }}
        >
          {/* Right Top Text */}
          <div className="absolute top-2 sm:top-4 right-[5%] max-w-[50%] sm:max-w-none">
            <motion.h3
              className="text-[10px] sm:text-[20px] md:text-[25px] lg:text-[35px] capitalize font-poppins text-black text-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FROM QUICK BOIL TO <br className="hidden sm:block" /> PERFECT POUR
            </motion.h3>
          </div>

          {/* Left Bottom Text */}
          <div className="absolute bottom-[5%] left-[5%] max-w-[50%] sm:max-w-none">
            <motion.p
              className="mt-2 text-[10px] sm:text-[18px] md:text-[22px] lg:text-[26px] capitalize text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              every detail is designed for <br className="hidden sm:block" />{" "}
              convenience, safety, and style.
            </motion.p>
          </div>

          {/* Right Bottom Button */}
          <motion.button
            className="absolute bottom-[5%] border rounded-3xl right-4 sm:right-10 md:right-20 bg-black text-white px-3 py-2 sm:px-2 sm:py-1 md:px-6 md:py-3 text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn More
          </motion.button>
        </div>

        {/* Two images section */}
        <div className="flex flex-col md:flex-row gap-0 mt-0">
          {/* Small kettle image */}
          <div className="w-full md:w-1/2">
            <img
              src={kettleSmall}
              alt="Small Kettle"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Lid section */}
          <div className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat relative h-[400px] sm:h-[500px] md:h-[60vh]">
            {/* Left Top Text */}
            <motion.div
              className="absolute top-5 sm:top-8 md:top-10 left-5 sm:left-8 md:left-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold text-black leading-tight">
                SMART - LOCK <br className="hidden sm:block" /> LID
              </h3>
            </motion.div>

            {/* Centered Image */}
            <motion.div
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-0 sm:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={lid}
                alt="Kettle Lid"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto"
              />
            </motion.div>

            {/* Left Bottom Text */}
            <motion.div
              className="absolute bottom-5 sm:bottom-8 md:bottom-10 left-5 sm:left-8 md:left-10 max-w-[90%] md:max-w-[80%]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Desktop view - regular text (only on lg and above) */}
              <p className="hidden lg:block text-[18px] text-gray-800 capitalize">
                The Smart-Lock Lid is designed for effortless one-hand opening,
                <br /> secure sealing, and optimal heat retention – making every
                brew
                <br /> safe, quick, and spill-free.
              </p>

              {/* Mobile/Tablet view - dropdown toggle (shows on sm and md) */}
              <div className="lg:hidden">
                <button
                  className="flex items-center justify-between w-full text-left text-[14px] sm:text-[16px] text-gray-800 capitalize font-medium"
                  onClick={toggleDescription}
                >
                  <span>Smart-Lock Lid Features</span>
                  {showDescription ? (
                    <FaChevronUp className="text-gray-600 ml-2" />
                  ) : (
                    <FaChevronDown className="text-gray-600 ml-2" />
                  )}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: showDescription ? "auto" : 0,
                    opacity: showDescription ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  style={{
                    transformOrigin: "top",
                    margin: "0",
                  }}
                >
                  <p className="text-[14px] sm:text-[16px] text-gray-800 capitalize pt-2">
                    The Smart-Lock Lid is designed for effortless one-hand
                    opening, secure sealing, and optimal heat retention – making
                    every brew safe, quick, and spill-free.
                  </p>
                </motion.div>
              </div>

              <p className="text-[18px] sm:text-[22px] md:text-[26px] text-gray-800 capitalize underline font-bold mt-4 sm:mt-6 md:mt-10">
                LEARN MORE
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LidSection;
