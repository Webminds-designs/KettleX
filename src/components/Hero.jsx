import { HiOutlineArrowDown } from "react-icons/hi";
import kettle from '../assets/images/landing-kettle.png';
import { motion } from 'framer-motion';

import "../assets/css/Hero.css";

function Hero() {
  return (
    <>
      <div className="h-100vh bg-[#F9F9F9]">
        <div className="relative h-[90vh] bg-[#c2c2c2] mb-6 flex items-center justify-center">
          
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[7rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#E7E6E6] to-[#737272]"
            >
              SMART
            </motion.h1>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center font-semibold text-white items-center z-20">
            <div className="relative w-full">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="absolute left-5 bottom-30 md:left-10 md:bottom-20 lg:left-18 lg:bottom-24 xl:left-36 xl:bottom-32 2xl:left-48 text-2xl lg:text-3xl xl:text-4xl font-medium"
              >
                Smart & Efficient
              </motion.h2>
            </div>
              
            <div className="absolute left-3 bottom-20 md:right-4 md:bottom-30 lg:right-20 lg:bottom-20 xl:right-60 xl:bottom-26">
              <p className="text-[7px] leading-tight md:text-sm lg:text-lg text-left md:text-right font-normal ">
                Embrace the power of<br /> intelligent technology with <br />our Smart Kettle
              </p>
            </div>
          </div>

          <img 
            className="w-[40rem] xl:w-[46rem] mt-16 z-10" 
            src={kettle} 
            alt="kettle" 
          />

          <div className="outer-circle z-30 absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#F9F9F9] rounded-full flex items-center justify-center">
            <div className="w-18 h-18 bg-black rounded-full flex items-center justify-center">
              <HiOutlineArrowDown className="text-4xl text-white" />
            </div>
          </div>
        </div>
        <h1 className="ml-1 md:ml-8 lg:ml-20 mb-20 pb-6 text-black text-sm md:text-md lg:text-2xl font-medium">
          Electrification
        </h1>
      </div>
    </>
  );
}

export default Hero;
