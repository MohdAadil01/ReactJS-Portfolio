import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='fixed z-[999] sm:w-full sm:px-20 p-6 sm:py-8 font-["NeueMontreal"] flex items-center justify-between'>
      <div className="logo sm:text-3xl text-[1.5rem] font-['Neue_Montreal'] leading-none">
        MOHD AADIL
      </div>
      <div className="links sm:flex gap-10 flex-col sm:flex-row hidden">
        {["Home", "About", "Projects", "Socials", "Contact"].map(
          (item, index) => (
            <Link
              key={index}
              href={item}
              className={`text-lg capitalize font-light ${
                index === 4 && "sm:ml-32"
              } relative text-zinc-300 hover:text-zinc-100 hover:underline transition-all duration-300`}
              activeClass="active"
              smooth
              spy
              to={item}
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
