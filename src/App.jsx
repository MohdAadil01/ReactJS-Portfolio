import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Bubblers from "./components/Bubblers";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import Footer from "./components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full m-h-screen text-white bg-zinc-900">
      <Navbar></Navbar>
      <Home></Home>
      <Marquee></Marquee>
      <About></About>
      <Bubblers></Bubblers>
      <Projects></Projects>
      <Profiles></Profiles>
      <Footer></Footer>
    </div>
  );
}

export default App;
