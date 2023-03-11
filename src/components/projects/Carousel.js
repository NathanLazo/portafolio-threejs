/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import Image from "next/image";
import { LightningBoltIcon } from "@heroicons/react/solid";
import TlachiaImage from "@public/img/tlachia.jpg";
import GreenLemonImage from "@public/img/green-lemon.jpg";
import TheZenImage from "@public/img/the-zen.jpg";
import BBSImage from "@public/img/logo-bbs.png";

const projects = [
  {
    name: "Tlachia",
    title: "Blockchain traceability",
    role: "Fullstack blockchain developer",
    imageUrl: TlachiaImage,
    projectUrl: "https://tlachia.io",
  },
  {
    name: "The Zen",
    title: "Metaverse and NFTs",
    role: "Fullstack & game developer",
    imageUrl: TheZenImage,
    projectUrl: "https://the-zen.vercel.app",
  },
  {
    name: "Green Lemon",
    title: "Restaurant management",
    role: "Fullstack web developer",
    imageUrl: GreenLemonImage,
    projectUrl: "https://greenlemoncuu.000webhostapp.com/",
  },
  {
    name: "Blockchain BS",
    title: "Project incubator",
    role: "Web developer",
    imageUrl: BBSImage,
    projectUrl: "https://blockchainbusinessschool.io",
  },
];

export default function Example() {
  return (
    <div className='flex justify-center'>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {projects.map(project => (
          <li
            key={project.name}
            className='col-span-1 flex flex-col text-center bg-transparent rounded-lg shadow-2xl divide-y divide-gray-200'
          >
            <div className='flex-1 flex flex-col p-8'>
              <Image
                className='w-32 flex-shrink-0 mx-auto rounded-full'
                src={project.imageUrl}
                alt=''
                width={200}
                height={200}
              />
              <h3 className='mt-6 text-gray-200 text-sm font-medium'>{project.name}</h3>
              <dl className='mt-1 flex-grow flex flex-col justify-between'>
                <dd className='text-gray-300 text-sm'>{project.title}</dd>
                <dd className='mt-3'>
                  <span className='hidden lg:block px-2 py-1 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full'>
                    {project.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className='-mt-px flex divide-x divide-gray-200'>
                <div className='w-0 flex-1 flex'>
                  <a
                    href={project.projectUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-indigo-50 hover:text-indigo-300 font-medium border border-transparent rounded-b-lg'
                  >
                    <LightningBoltIcon className='w-5 h-5' aria-hidden='true' />
                    <span className='ml-3'>Watch</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
