import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { motion, useAnimate, useAnimation } from "framer-motion";

import Gaming from "../assets/images/gaming.png";
import Food from "../assets/images/food.png";
import Dashboard from "../assets/images/dashboard.png";
import Meetup from "../assets/images/meetup.png";

function Projects() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handlerHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handlerHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div id="Projects" className="w-full sm:py-20 py-10">
      <div className="w-full sm:px-20 px-6 border-b-[1px] border-zinc-700 sm:pb-20 pb-10">
        <h1 className="sm:text-7xl text-5xl tracking-tight font-['Neue_Montreal']">
          Featured Projects
        </h1>
      </div>
      <div className="sm:px-20 px-6">
        <div className="cards w-full flex flex-col sm:flex-row sm:gap-10 mt-10 gap-[8rem]">
          <motion.div
            onHoverStart={() => handlerHover(0)}
            onHoverEnd={() => handlerHoverEnd(0)}
            className="cardcontainer relative sm:w-1/2 sm:h-[75vh] h-[23vh] w-[39vh]"
          >
            <p className="flex items-center sm:text-lg text-[1.2rem] leading-none mb-3 sm:tracking-tighter gap-1 font-['Neue_Montreal']">
              <span className="">
                <GoDotFill />
              </span>
              Gaming Website
            </p>
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{
                ease: [0.4, 0, 0.2, 1],
                duration: 0.5,
              }}
              className="card w-full h-full rounded-xl overflow-hidden"
            >
              <h1
                className="absolute text-[#DB2AFF] left-[50%] -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter sm:text-8xl text-4xl font-['Neue_Montreal'] flex overflow-hidden font-semibold p-1
               "
              >
                {"UNIQUESQUAD".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.06 * index,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src={Gaming}
                alt="project"
              />
            </motion.div>
            <div className=" mt-5 contact-me flex items-center gap-3">
              <div className="px-5 py-2 border-[2px] border-zinc-400 text-sm rounded-full font-light text-md uppercase tracking-widest font-['Neue_Montreal']">
                Explore
              </div>
              <a
                href="https://github.com/MohdAadil01/gaming_website"
                target="_blank"
                className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <MdArrowOutward className="font-900 text-lg" />
              </a>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handlerHover(1)}
            onHoverEnd={() => handlerHoverEnd(1)}
            className="cardcontainer relative sm:w-1/2 sm:h-[75vh] h-[23vh] w-[39vh]"
          >
            <p className="flex items-center sm:text-lg leading-none mb-3 sm:tracking-tighter gap-1 text-[1.2rem] font-['Neue_Montreal']">
              <span className="">
                <GoDotFill />
              </span>
              Food Hub
            </p>
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{
                ease: [0.4, 0, 0.2, 1],
                duration: 0.5,
              }}
              className="card w-full h-full rounded-xl overflow-hidden"
            >
              <h1 className="absolute text-[#FC2745] right-[50%] translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter sm:text-8xl text-4xl font-['Neue_Montreal'] flex overflow-hidden font-semibold p-1">
                {"FOODHUB".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.05 * index,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src={Food}
                alt="project"
              />
            </motion.div>
            <div className=" mt-5 contact-me flex items-center gap-3">
              <div className="px-5 py-2 border-[2px] border-zinc-400 text-sm rounded-full font-light text-md uppercase tracking-widest font-['Neue_Montreal']">
                Explore
              </div>
              <a
                href="https://github.com/MohdAadil01/food_delivery_website"
                target="_blank"
                className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <MdArrowOutward className="font-900 text-lg" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex flex-col sm:flex-row sm:gap-10 sm:mt-[10rem] mt-[8rem] gap-[8rem]">
          <motion.div
            onHoverStart={() => handlerHover(2)}
            onHoverEnd={() => handlerHoverEnd(2)}
            className="cardcontainer relative sm:w-1/2 sm:h-[75vh] h-[23vh] w-[39vh]"
          >
            <p className="flex items-center sm:text-lg text-[1.2rem] leading-none mb-3 sm:tracking-tighter gap-1 font-['Neue_Montreal']">
              <span className="">
                <GoDotFill />
              </span>
              Admin Dashboard
            </p>
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{
                ease: [0.4, 0, 0.2, 1],
                duration: 0.5,
              }}
              className="card w-full h-full rounded-xl overflow-hidden"
            >
              <h1
                className="absolute text-[#DB2AFF] left-[50%] -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-4xl sm:text-8xl font-['Neue_Montreal'] flex overflow-hidden font-semibold p-1
               "
              >
                {"DASHBOARD".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.06 * index,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src={Dashboard}
                alt="project"
              />
            </motion.div>
            <div className=" mt-5 contact-me flex items-center gap-3">
              <div className="px-5 py-2 border-[2px] border-zinc-400 text-sm rounded-full font-light text-md uppercase tracking-widest font-['Neue_Montreal']">
                Explore
              </div>
              <a
                href="https://github.com/MohdAadil01/ReactJS-admin-dashboard"
                target="_blank"
                className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <MdArrowOutward className="font-900 text-lg" />
              </a>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handlerHover(3)}
            onHoverEnd={() => handlerHoverEnd(3)}
            className="cardcontainer relative sm:w-1/2 sm:h-[75vh] h-[23vh] w-[39vh]"
          >
            <p className="flex items-center sm:text-lg leading-none mb-3 sm:tracking-tighter gap-1 text-[1.2rem] font-['Neue_Montreal']">
              <span className="">
                <GoDotFill />
              </span>
              Meetup Application
            </p>
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{
                ease: [0.4, 0, 0.2, 1],
                duration: 0.5,
              }}
              className="card w-full h-full rounded-xl overflow-hidden"
            >
              <h1 className="absolute text-[#FC2745] right-[50%] translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-8xl font-['Neue_Montreal'] flex overflow-hidden font-semibold p-1">
                {"MEETUP".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.05 * index,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src={Meetup}
                alt="project"
              />
            </motion.div>
            <div className=" mt-5 contact-me flex items-center gap-3">
              <div className="px-5 py-2 border-[2px] border-zinc-400 text-sm rounded-full font-light text-md uppercase tracking-widest font-['Neue_Montreal']">
                Explore
              </div>
              <a
                href="https://github.com/MohdAadil01/NextJS-meetup-application"
                target="_blank"
                className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <MdArrowOutward className="font-900 text-lg" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
