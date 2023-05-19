import Cup from "./pages/Cup";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Navbar from "./pages/Navbar";
import "swiper/css";
import "swiper/css/pagination";

import Slide from "./pages/Swiper";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
     <Home />
     <Cup />
     <Map />
    </div>
  );
}

export default App;
