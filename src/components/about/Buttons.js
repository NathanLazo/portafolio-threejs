import React from "react";

const Buttons = ({setSelected, selected}) => {


  return (
    <div className="-ml-4 flex justify-center z-50 w-full mx-auto">
      <div className="relative -left-11 md:left-9 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-click relative z-50 top-5 left-[18.5rem] right-0 cursor-pointer"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#E7E7E7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setSelected(4)}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="3" y1="12" x2="6" y2="12" />
          <line x1="12" y1="3" x2="12" y2="6" />
          <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
          <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
          <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
          <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
        </svg>
      </div>
      <span className=" relative mb-8 z-0 inline-flex shadow-lg rounded-md gradient-button">
        <a
          id="frontend-button"
          type="button"
          className={selected === 0
            ? `relative inline-flex items-center px-2 md:px-4 py-2 rounded-l-md border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `relative inline-flex items-center px-2 md:px-4 py-2 rounded-l-md border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSelected(0)}
        >
          2018
        </a>
        <a
          id="3d-button"
          type="button"
          className={selected === 1
            ? `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSelected(1)}
        >
          2019
        </a>
        <a
          id="3d-button"
          type="button"
          className={selected === 2
            ? `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSelected(2)}
        >
          2020
        </a>
        <a
          id="3d-button"
          type="button"
          className={selected === 3
            ? `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSelected(3)}
        >
          2021
        </a>
        <a
          id="backend-button"
          type="button"
          className={selected === 4
            ? `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 rounded-r-md border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `-ml-px relative inline-flex items-center px-2 md:px-4 py-2 rounded-r-md border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSelected(4)}
        >
          2022
        </a>
      </span>
    </div>
  );
};

export default Buttons;
