import React from "react";

const Buttons = ({setSkills, skills}) => {


  return (
    <div  className="-ml-4 flex justify-center z-50 w-full">
      <div className="relative left-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-click relative z-50 top-5 left-52 right-0 cursor-pointer"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#E7E7E7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setSkills(2)}
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
          className={skills === 0 
            ? `relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSkills(0)}
        >
          Frontend
        </a>
        <a
          id="3d-button"
          type="button"
          className={skills === 1 
            ? `-ml-px relative inline-flex items-center px-4 py-2 border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `-ml-px relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSkills(1)}
        >
          3D
        </a>
        <a
          id="backend-button"
          type="button"
          className={skills === 2 
            ? `-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium text-white hover:opacity-50 z-10 outline-none ring-1 ring-white border-white cursor-pointer` 
            : `-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-200 text-sm font-medium text-white hover:opacity-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer`}
          onClick={() => setSkills(2)}
        >
          Backend
        </a>
      </span>
    </div>
  );
};

export default Buttons;
