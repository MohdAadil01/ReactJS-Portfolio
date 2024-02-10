import React, { useEffect, useState } from "react";
function Bubblers() {
  let [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  console.log(rotate);
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="w-[13vw] h-[13vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative flex items-center justify-center text-[1.3vw] font-semibold tracking-widest">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 p-[2px]"
              >
                <div className="w-[1.2rem] h-[1.2rem] bg-zinc-100 rounded-full"></div>
              </div>
              MOHD
            </div>
          </div>
          <div className="w-[13vw] h-[13vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative flex items-center justify-center text-[1.3vw] font-semibold tracking-widest">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 p-[2px]"
              >
                <div className="w-[1.2rem] h-[1.2rem] bg-zinc-100 rounded-full"></div>
              </div>
              AADIL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bubblers;
