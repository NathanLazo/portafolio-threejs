import React, { useState } from "react";
import Image from "next/image";
import Title from "./Title";
import Buttons from "./Buttons";
import TimeLine from "./TimeLine";
import { motion } from "framer-motion";
import HackerMe from "@public/img/hacker-me.svg";

const About = () => {
  const [selected, setSelected] = useState(4);

  return (
    <motion.div
      className="flex flex-col justify-center w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Title title="about" />
      <div className="flex justify-center xl:justify-between">
        <div className="ml-0 xl:ml-8">
          <Buttons setSelected={setSelected} selected={selected} />
          <TimeLine selected={selected} />
        </div>
        <div className="w-1/2 hidden xl:block">
          <Image src={HackerMe} alt="me" layout="intrinsic" draggable={false} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
