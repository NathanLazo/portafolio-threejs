import React from "react";

const Content = () => {
  return (
    <div className="w-96">
      <div className="border opacity-90 w-fit px-1 rounded-sm gradient-button">
        <p className="text-white p-1 font-bold text-xs">
          Welcome to my Portafolio
        </p>
      </div>
      <p
        id="typewriter1"
        className="line-1 anim-typewriter1 text-white
         mt-10 ml-1 font-semibold text-lg sm:text-3xl lg:text-4xl w-max"
      >
        Hi! I&apos;m Nathan.
      </p>
      <p
        id="typewriter2"
        className="line-2 anim-typewriter2 text-white ml-1 
          font-semibold text-lg sm:text-3xl lg:text-4xl w-max"
      >
        Blockchain and web developer
      </p>
    </div>
  );
};

export default Content;
