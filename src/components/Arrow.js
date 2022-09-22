import React, { useState, useEffect } from "react";
import { ArrowNarrowDownIcon, ArrowNarrowUpIcon } from "@heroicons/react/solid";

const Arrow = () => {
  const [onBottom, setOnBottom] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        setOnBottom(true);
      }
      else {
        setOnBottom(false);
      }
    };
  }, []);

  return (
    <>
      <div className="fixed right-0 bottom-0 text white z-[500]">
        {onBottom ? (
          <button
            className="gradient-button rounded-full p-[.72rem] m-4"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ArrowNarrowUpIcon className="w-5 animate-bounce" />
          </button>
        ) : (
          <button
            className="gradient-button rounded-full p-[.72rem] m-4"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <ArrowNarrowDownIcon className="w-5 animate-bounce" />
          </button>
        )}
      </div>
    </>
  );
};
export default Arrow;
