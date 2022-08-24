import Title from "./Title";
import React, { useState } from "react";
import Buttons from "./Buttons";
import GridList from "./GridList";

const Skills = () => {
  const [skill, setSkills] = useState(0);

  return (
    <div id="skills" className="flex flex-col justify-center w-full">
      <Title title="skills" />
      <Buttons setSkills={setSkills} skills={skill} />
      <GridList skills={skill} />
    </div>
  );
};

export default Skills;