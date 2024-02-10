import React from "react";

function Cards({ color, width }) {
  return (
    <div className={`cardcontainer w-${width} h-[50vh]`}>
      <div className={`card w-full h-full bg-[${color}] `}>ASHFDJ</div>
    </div>
  );
}

export default Cards;
