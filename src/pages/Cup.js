import React from "react";

export default function Cup() {
  return (
    <div className="cup">
      <div className="cupimg">
        <div className="cupimg" data-scroll-repeat>
          <img
            src="img/cup.png"
            aria-label=""
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="3"
            data-scroll-delay="0.15"
            alt=""
          />
          <img
            src="img/cup2.png"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="-3"
            data-scroll-delay="0.95"
            alt=""
          />
        </div>
      </div>
      <img src="img/beer1.png" className="beer" alt="" />
    </div>
  );
}
