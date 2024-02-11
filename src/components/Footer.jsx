import React from "react";
import { CgMail } from "react-icons/cg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
const socials = [
  { handle: "Linkedin", link: "https://linkedin.com/in/mohd-aadil4240" },
  { handle: "Github", link: "https://github.com/mohdaadil01" },
  { handle: "Twitter", link: "https://twitter.com/@_MOHD_AADIL" },
];

function Footer() {
  return (
    <div
      id="Contact"
      className="sm:flex sm:gap-5 w-full sm:h-screen bg-zinc-900 sm:px-20 px-6 sm:pt-10 p-10 font-['Founders_Grotesk']"
    >
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="sm:w-1/2 font-['Founders_Grotesk'] sm:flex sm:flex-col sm:justify-between sm:h-[70vh] h-[25vh]"
      >
        <div className="heading mb-2 ">
          <h1 className="text-[5vw] font-semibold uppercase leading-none tracking-tighter">
            Let's
          </h1>
          <h1 className="text-[5vw] font-semibold uppercase leading-none tracking-tighter">
            Collaborate
          </h1>
        </div>
        <h3 className="flex items-center sm:gap-2 gap-1 text-lg">
          <CgMail /> mohdaadil4240@gmail.com
        </h3>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="sm:w-1/2"
      >
        <h1 className="text-[5vw] font-semibold uppercase leading-none tracking-tighter">
          EXPLORE MY SOCIALS
        </h1>
        <div className="details font-['Neue_Montreal'] sm:mt-10 mt-5">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="block text-xl font-light font-['NeueMontreal'] tracking-wider
              sm:m-2 relative text-zinc-400  hover:text-zinc-100 hover:underline transition-all duration-300"
              target="_blank"
            >
              {social.handle}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
