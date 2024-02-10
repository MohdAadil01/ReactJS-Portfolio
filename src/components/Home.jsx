import React from "react";
import Image from "../assets/images/text-image.png";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
function Home() {
  return (
    <div
      id="Home"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="bg-zinc-900 h-screen w-full pt-1"
    >
      <div className="textstructure sm:mt-52 sm:px-20 mt-[12rem] px-6">
        {["I Create", "Eye Catching", "Websites"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "7.3vw" }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="sm:mr-[1vw] mr-1 rounded-md sm:w-[7.3vw] w-[8.3vw] sm:h-[4.9vw] relative top-[0.8vw] hover:-translate-y-[0.35rem] transition-all ease-in overflow-hidden"
                >
                  <a href="https://github.com/mohdaadil01" target="new">
                    <img
                      src={Image}
                      alt="text-image"
                      className="h-full w-full"
                    ></img>
                  </a>
                </motion.div>
              )}
              <h1 className="uppercase sm:text-[7.3vw] sm:leading-[6.5vw] tracking-tighter font-['Founder_Grotesk'] font-medium leading-none text-[2.8rem]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 sm:mt-20 mt-[16rem] sm:flex sm:justify-between py-5 sm:px-20 px-6">
        {[
          "Currently pursing Bachelor`s in Computer Science",
          "Looking for Internship/Remote Jobs",
        ].map((item, index) => (
          <p
            key={index}
            className="sm:text-md text-[1.1rem] font-light sm:tracking-tight leading-[3rem]"
          >
            {item}
          </p>
        ))}
        <div className="contact-me flex items-center gap-5 sm:mt-0 mt-6">
          <div className="px-5 py-2 border-[2px] border-zinc-400 sm:text-[1vw] rounded-full font-light text-md uppercase tracking-widest font-['Neue_Montreal'] text-[0.9rem]">
            Contact
          </div>
          <div className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
            <MdArrowOutward className="font-900 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
