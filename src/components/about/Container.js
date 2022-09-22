import React, { useState } from 'react';
import Title from './Title'
import Buttons from './Buttons'
import TimeLine from './TimeLine';
import { motion } from 'framer-motion'


const About = () => {
  const [selected, setSelected] = useState(4)

  return (
    <motion.div 
    className="flex flex-col justify-center w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5  }}
    viewport={{once: true}}
    >
      <Title title="about" />
      <Buttons setSelected={setSelected} selected={selected} />
      <TimeLine selected={selected}/>
    </motion.div>
  )
}

export default About;
