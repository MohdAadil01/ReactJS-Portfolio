import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full md:py-20 py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
            duration: 20,
          }}
          className="text-[8vw] leading-none font-['Founders_Grotesk'] uppercase p-10 font-semibold pr-20 md:tracking-tighter"
        >
          {`MONGO EXPRESS REACT NODE ${" "}`}
          ReactJS Expressjs mongdb nodejs
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="text-[8vw] leading-none font-['Founders_Grotest'] uppercase p-10 font-semibold pr-20 md:tracking-tighter"
        >
          {`MONGO EXPRESS REACT NODE ${" "}`}
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
