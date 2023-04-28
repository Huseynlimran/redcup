import React from "react";

export default function Home() {
  return (
    <div className="main">
     <video autoPlay loop playsInline  muted className="video">
        <source src="img/video.mp4"  />
      </video>
    </div>
  );
}
