import Image from "next/image";
import React, { useEffect } from "react";
import Content from "./Content";
import Model from "./Model";

const Hero = () => {

  useEffect(() => {
    document.getElementById("typewriter2").style.border = "none";
    setTimeout(() => {
      document.getElementById("typewriter1").style.border = "none";
      document.getElementById("typewriter2").style.borderRight = "solid";
    }, 5000);
  }, []);

  return (
    <div className="flex-col flex lg:flex-row w-full h-screen">
      <div className="w-1/2 lg:mt-24">
        <Content />
      </div>
      <div className="w-full lg:w-1/2 h-3/4">
          <Model />
      </div>
    </div>
  );
};

export default Hero;
