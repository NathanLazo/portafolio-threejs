import React from "react";
import { GiProcessor } from "react-icons/gi";
import {
  SiThreedotjs,
  SiHiveBlockchain,
  SiSolidity,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoGameControllerA } from "react-icons/io";
import { MdOutlineWeb } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";
import { TbGeometry, TbCSharp, TbSchool, TbMathFunction } from "react-icons/tb";
import { BsCodeSlash, BsCode } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { GiToken } from "react-icons/gi";
import {
  FaLaptopCode,
  FaAngular,
  FaLaravel,
  FaReact,
  FaEthereum,
  FaUnity,
} from "react-icons/fa";

const timeLine = [
  [
    {
      id: 1,
      content: "Entered into the world of software",
      target: "development",
      icon: GiProcessor,
      iconBackground: "bg-blue-600",
    },
    {
      id: 2,
      content: "Learned Three.js library and some",
      target: "JavaScript",
      icon: SiThreedotjs,
      iconBackground: "bg-zinc-900",
    },
    {
      id: 3,
      content: "Created my first 3D model with",
      target: "Three.js",
      icon: TbGeometry,
      iconBackground: "bg-green-500",
    },
    {
      id: 4,
      content: "Finished",
      target: "JavaScript basics",
      icon: DiJavascript1,
      iconBackground: "bg-yellow-400",
    },
    {
      id: 5,
      content: "Started to develop my own 3D",
      target: "web applications",
      icon: MdOutlineWeb,
      iconBackground: "bg-green-500",
    },
  ],
  [
    {
      id: 1,
      content: "Initiated with ",
      target: "Unity game development",
      icon: FaUnity,
      iconBackground: "bg-black",
    },
    {
      id: 2,
      content: "Created my first",
      target: "2D game",
      icon: IoLogoGameControllerA,
      iconBackground: "bg-green-500",
    },
    {
      id: 3,
      content: "Learned",
      target: "C# basics",
      icon: TbCSharp,
      iconBackground: "bg-indigo-400",
    },
    {
      id: 4,
      content: "Continued to develop",
      target: "programming skills",
      icon: BsCodeSlash,
      iconBackground: "bg-blue-600",
    },
    {
      id: 5,
      content: "Looked for a ",
      target: "technological college",
      icon: TbSchool,
      iconBackground: "bg-orange-400",
    },
  ],
  [
    {
      id: 1,
      content: "Accepted in ",
      target: "Technological University of Chihuahua",
      icon: TbSchool,
      iconBackground: "bg-orange-400",
    },
    {
      id: 2,
      content: "Learned a lot about",
      target: "3D math and design",
      icon: TbMathFunction,
      iconBackground: "bg-gray-400",
    },
    {
      id: 3,
      content: "Got better at programming in many",
      target: "languages",
      icon: BsCodeSlash,
      iconBackground: "bg-blue-600",
    },
    {
      id: 4,
      content: "Created native apps with",
      target: "C#",
      icon: TbCSharp,
      iconBackground: "bg-indigo-400",
    },
    {
      id: 5,
      content: "Understanding of",
      target: "Full-stack development",
      icon: BiCodeCurly,
      iconBackground: "bg-green-500",
    },
  ],
  [
    {
      id: 1,
      content: "Learned",
      target: "HTML, CSS and PHP",
      icon: BsCode,
      iconBackground: "bg-blue-600",
    },
    {
      id: 2,
      content: "First job developing",
      target: "web applications",
      icon: FaLaptopCode,
      iconBackground: "bg-green-500",
    },
    {
      id: 3,
      content: "Used my first framework",
      target: "Angular",
      icon: FaAngular,
      iconBackground: "bg-red-500",
    },
    {
      id: 4,
      content: "Used Laravel to develop a",
      target: "full-stack web application",
      icon: FaLaravel,
      iconBackground: "bg-red-400",
    },
    {
      id: 5,
      content: "Created several projects",
      target: "with React",
      icon: FaReact,
      iconBackground: "bg-cyan-300",
    },
  ],
  [
    {
      id: 1,
      content: "Initiated with",
      target: "blockchain development",
      icon: SiHiveBlockchain,
      iconBackground: "bg-blue-600",
    },
    {
      id: 2,
      content: "Learned solidity to create",
      target: "smart contracts",
      icon: SiSolidity,
      iconBackground: "bg-black",
    },
    {
      id: 3,
      content: "Created NFTs and published in my own",
      target: "NFT market",
      icon: GiToken,
      iconBackground: "bg-green-500",
    },
    {
      id: 4,
      content: "New job developing and creating",
      target: "decentralized applications",
      icon: FaEthereum,
      iconBackground: "bg-orange-400",
    },
    {
      id: 5,
      content: "Developed several blockchain projects with",
      target: "Next.js",
      icon: SiNextdotjs,
      iconBackground: "bg-black",
    },
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TimeLine = ({ selected }) => {
  return (
    <div className='flex justify-center'>
      <div className=' w-[20rem] md:w-[28rem] h-[450px] z-50 rounded-xl shadow-2xl px-6 py-8'>
        <ul role='list' className='-mb-8'>
          {timeLine[selected]?.map((event, eventIdx) => (
            <li key={event.id}>
              <div className='relative pb-8'>
                {eventIdx !== timeLine.length - 1 ? (
                  <span
                    className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                    aria-hidden='true'
                  />
                ) : null}
                <div className='relative flex space-x-3'>
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        "h-8 w-8 mr-4 rounded-full flex items-center justify-center ring-8 ring-white"
                      )}
                    >
                      <event.icon
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                    <div>
                      <p className='text-normal text-indigo-100 text-left'>
                        {event.content}{" "}
                        <button className='font-semibold text-purple-200 text-left'>
                          {event.target}
                        </button>
                      </p>
                    </div>
                    <div className='text-right text-sm whitespace-nowrap text-purple-300'>
                      <time>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
