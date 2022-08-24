import React from "react";
import Title from "./Title";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <Title title="projects" />
      <Carousel />
    </div>
  )
}

export default Projects;