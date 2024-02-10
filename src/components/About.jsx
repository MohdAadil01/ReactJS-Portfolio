import React from "react";
import Profile from "../assets/images/Profile.jpg";
import { motion, useAnimation } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

function About() {
  const animate = useAnimation();
  const hoverHandler = () => {
    animate.start({ scale: 1.2 });
  };
  const hoverEndHandler = () => {
    animate.start({ scale: 0.6 });
  };
  return (
    <div
      id="About"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full sm:p-20 p-6 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] sm:text-[3.3vw] sm:leading-[4vw] leading-[2rem] sm:tracking-tight text-[1.8rem]">
        Empowering digital landscapes with a blend of creativity and code, I am
        MOHD AADIL, a MERN Stack Maestro. From seamless user interfaces to
        dynamic web applications, I specialize in crafting immersive online
        experiences that captivate and inspire.
      </h1>
      <div className="w-full flex sm:flex-row flex-col gap-5 border-t-[1px] sm:mt-20 mt-10 border-[#a1b562] pt-10">
        <div className="sm:w-1/2">
          <h1 className="sm:text-7xl text-[2.8rem] leading-none">
            Connect with me :
          </h1>
          <motion.button
            onHoverStart={hoverHandler}
            onHoverEnd={hoverEndHandler}
            target="_blank"
            href="https://linkedin.com/in/mohd-aadil4240"
            className="flex gap-10 items-center sm:px-8 sm:py-5 px-6 py-4 uppercase bg-zinc-900 rounded-full text-white mt-10"
          >
            Linkedin
            <motion.div
              initial={{ scale: 0.6 }}
              animate={animate}
              transition={{
                ease: "linear",
              }}
              className="w-7 h-7 bg-zinc-100 rounded-full relative p-1"
            >
              <MdArrowOutward className="text-black font-semibold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  " />
            </motion.div>
          </motion.button>
        </div>
        <div className="sm:w-1/2 sm:h-[70vh] h-[45vh] bg-red-100 rounded-3xl sm:mt-0 mt-5">
          <img src={Profile} alt="Profile pic" className="w-full h-full"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
