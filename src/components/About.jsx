import React from "react";
import Profile from "../assets/images/Profile.jpg";
import { motion, useAnimation } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { fadeIn } from "../variants.js";

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
      className="bg-zinc-900 w-full md:p-20 p-6  rounded-tl-3xl rounded-tr-3xl text-white"
    >
      <h1 className="font-['Neue_Montreal'] md:text-[3.3vw] md:leading-[4vw] leading-[2rem] md:tracking-tight text-[1.8rem]">
        Empowering digital landscapes with a blend of creativity and code, I am
        MOHD AADIL, a MERN Stack Maestro. From seamless user interfaces to
        dynamic web applications, I specialize in crafting immersive online
        experiences that captivate and inspire.
      </h1>
      <div className="w-full flex md:flex-row flex-col gap-5 border-t-[1px] md:mt-20 mt-10 border-[#a1b562] pt-10">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2"
        >
          <h1 className="md:text-7xl text-[2.8rem] leading-none">
            Connect with me :
          </h1>
          <motion.a
            onHoverStart={hoverHandler}
            onHoverEnd={hoverEndHandler}
            target="_blank"
            href="https://linkedin.com/in/mohd-aadil4240"
            className=" btn flex gap-10 items-center md:px-8 md:py-5 px-6 py-4 uppercase bg-zinc-900 rounded-full text-white mt-10 w-[12.5rem]"
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
          </motion.a>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 md:h-[70vh] h-[45vh] bg-black/20 rounded-3xl md:mt-0 mt-5 flex items-start gap-4 flex-wrap p-5 sm:p-12 sm:gap-8"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://www.chartjs.org/media/logo-title.svg"
            alt="chartjs"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="cplusplus"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="figma"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
            alt="oracle"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width="40"
            height="40"
            className="sm:w-20"
          />{" "}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
