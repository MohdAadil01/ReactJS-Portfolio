import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Linkedin from "../assets/images/linkedin.jpg";
import Github from "../assets/images/text-image.png";
import Twitter from "../assets/images/twitter.jpg";

function Profiles() {
  return (
    <div
      id="Socials"
      className=" w-full h-screen bg-zinc-900 sm:px-24 px-6 font-['Neue_Montreal'] mt-[7rem] sm:mt-[10rem] mb-10"
    >
      <h1 className="sm:text-7xl text-5xl tracking-tight font-['Neue_Montreal'] my-10">
        Socials
      </h1>
      <div className=" sm:flex sm:gap-5 items-center ">
        <div className="sm:mb-0 mb-5 cardcontainer sm:h-[50vh] h-[30vh] sm:w-1/2">
          <div className="relative card rounded-xl w-full h-full flex items-center justify-center overflow-hidden">
            <img src={Github} alt="profile" className="w-full h-full" />
            <div className="contact-me flex items-center gap-3 absolute left-8 bottom-4">
              <div className="px-5 py-2 border-[2px] border-zinc-400 text-[1vw] rounded-full font-light text-sm uppercase tracking-widest">
                Explore
              </div>
              <a
                href="https://github.com/mohdaadil01"
                target="_blank"
                className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <MdArrowOutward className="font-900 text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:gap-5 cardcontainer sm:h-[50vh] sm:w-1/2">
          <div className="sm:mb-0 mb-5 relative card rounded-xl w-full h-full flex items-center justify-center overflow-hidden">
            {" "}
            <img src={Linkedin} alt="profile" className="w-full h-full" />
            <div className="contact-me flex items-center gap-3 absolute left-8 bottom-4">
              <div className="px-5 py-2 border-[2px] border-zinc-400 text-[1vw] rounded-full font-light text-sm uppercase tracking-widest">
                Explore
              </div>
              <a
                href="https://linkedin.com/in/mohd-aadil4240"
                target="_blank"
                className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <MdArrowOutward className="font-900 text-lg" />
              </a>
            </div>
          </div>
          <div className="sm:mb-0 mb-5 relative card rounded-xl w-full h-full flex items-center justify-center overflow-hidden">
            <img src={Twitter} alt="profile" className="w-full h-full" />
            <div className="contact-me flex items-center gap-3 absolute left-8 bottom-4">
              <div className="px-5 py-2 border-[2px] border-zinc-400 text-[1vw] rounded-full font-light text-sm uppercase tracking-widest">
                Explore
              </div>
              <a
                href="https://twitter.com/@_MOHD_AADIL"
                target="_blank"
                className="rounded-full w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <MdArrowOutward className="font-900 text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
