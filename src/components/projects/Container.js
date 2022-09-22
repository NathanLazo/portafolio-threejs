import React from "react";
import Title from "./Title";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div 
    className="flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{once: true}}
    >
      <Title title="projects" />
      <Carousel />
    </motion.div>
  )
}

export default Projects;