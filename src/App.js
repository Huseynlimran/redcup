import Cup from "./pages/Cup";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Navbar from "./pages/Navbar";
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./pages/Swiper";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import Title from "./pages/Title";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={{
          // inertia: 0.8,
          smooth: true,
          lerp: 0.1, // Linear Interpolation, 0 > 1 // Try 0.01
          multiplier: 0.5, // Effect Multiplier
          reloadOnContextChange: true,
          touchMultiplier: 2,
          smoothMobile: 0,
          smartphone: {
            smooth: !0,
            breakpoint: 767,
          },
          tablet: {
            smooth: !1,
            breakpoint: 1024,
          },
        }}
      >
        <Navbar />
        <div className="App" data-scroll-container ref={containerRef}>
          <Slide />
          <Cup />
          <Title />
          <Home />
          <Map />
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
