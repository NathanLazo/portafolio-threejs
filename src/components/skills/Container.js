import Title from "./Title";
import React, { useState } from "react";
import Buttons from "./Buttons";
import GridList from "./GridList";
import {motion} from "framer-motion";

const Skills = () => {
  const [skill, setSkills] = useState(0);

  return (
    <motion.div id="skills" className="flex flex-col justify-center w-full"   
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{once: true}}
    >
      <Title title="skills" />
      <Buttons setSkills={setSkills} skills={skill} />
      <GridList skills={skill} />
    </motion.div>
  );
};

export default Skills;