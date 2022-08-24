import React from "react";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiDatabase,
} from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import {
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiThreedotjs,
  SiAutodesk,
  SiUnity,
  SiSolidity,
  SiBlender
} from "react-icons/si";

const actions = [
  [
    {
      title: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      icon: DiHtml5,
      description: "I can write semantic HTML5 code and make it look good.",
      iconForeground: "text-orange-500",
    },
    {
      title: "CSS",
      href: "https://developer.mozilla.org/es/docs/Web/CSS",
      icon: DiCss3,
      description: "CSS is my best friend. Let's make things pretty.",
      iconForeground: "text-blue-500",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: DiJsBadge,
      description: "It's my favorite language. Fantastic tool to make things work.",
      iconForeground: "text-yellow-400",
    },
    {
      title: "TailwindCSS",
      href: "https://tailwindcss.com",
      icon: SiTailwindcss,
      description: "CSS framework for modern web development. I use it daily.",
      iconForeground: "text-cyan-500",
    },
    {
      title: "React",
      href: "https://es.reactjs.org",
      icon: SiReact,
      description: "I love React. I use it for building web apps.",
      iconForeground: "text-cyan-500",
    },
    {
      title: "Next.js",
      href: "https://nextjs.org",
      icon: SiNextdotjs,
      description: "I use Next.js for building web apps with Server side rendering.",
      iconForeground: "text-white",
    },
  ],
  [
    {
      title: "Maya",
      href: "https://www.autodesk.mx/products/maya",
      icon: SiAutodesk,
      description: "I use Maya for 3D modeling and animation.",
      iconForeground: "text-teal-700",
    },
    {
      title: "Three.js",
      href: "https://threejs.org",
      icon: SiThreedotjs,
      description: "I use Three.js for 3D visualization on web apps.",
      iconForeground: "text-white",
    },
    {
      title: "Unity Engine",
      href: "https://unity.com",
      icon: SiUnity,
      description: "I use Unity for game development.",
      iconForeground: "text-white",
    },
    {
      title: "3DS Max",
      href: "https://www.autodesk.mx/products/3ds-max",
      icon: SiAutodesk,
      description: "I use 3DS Max for realistic 3D modeling.",
      iconForeground: "text-teal-700",
    },
    {
      title: "Blender",
      href: "https://www.blender.org",
      icon: SiBlender,
      description: "I use Blender for 3D modeling and animation.",
      iconForeground: "text-orange-700",
    },
  ],
  [
    {
      title: "Node.js",
      href: "https://nodejs.org",
      icon: DiNodejsSmall,
      description: "I use Node.js for backend development.",
      iconForeground: "text-green-600",
    },
    {
      title: "Solidity",
      href: "https://docs.soliditylang.org",
      icon: SiSolidity,
      description: "I use Solidity for smart contracts and Dapps.",
      iconForeground: "text-white",
    },
    {
      title: "PHP",
      href: "https://www.php.net",
      icon: SiPhp,
      description: "I use PHP for backend development.",
      iconForeground: "text-[#8892BF]",
    },
    {
      title: "SQL",
      href: "https://www.w3schools.com/sql/sql_intro.asp",
      icon: AiOutlineConsoleSql,
      description: "I use SQL for database management.",
      iconForeground: "text-blue-700",
    },
    {
      title: "NoSQL",
      href: "https://www.mongodb.com/en/nosql-explained",
      icon: DiDatabase,
      description: "NoSQL is my favorite database type. I use it for storing data.",
      iconForeground: "text-red-700",
    },
    {
      title: "REST API",
      href: "https://www.redhat.com/en/topics/api/what-is-a-rest-api",
      icon: TbApi,
      description: "I use REST API for web apps and I develop my own.",
      iconForeground: "text-orange-700",
    },
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Grid = ({ skills }) => {
  return (
    <div className="flex flex-col justify-center w-64 sm:w-full mx-auto rounded-lg z-50 shadow-2xl divide-y divide-indigo-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions[skills].map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "relative group p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-200 shadow-2xl"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconForeground,
                "rounded-lg inline-flex p-3 ring-1 ring-indigo-200"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold text-purple-300">
              <a
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="focus:outline-none"
              >
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-indigo-200">
              {action.description}
            </p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Grid;
