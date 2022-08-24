import React, { useState } from 'react';
import Title from './Title'
import Buttons from './Buttons'
import TimeLine from './TimeLine';


const About = () => {
  const [selected, setSelected] = useState(4)

  return (
    <div className="flex flex-col justify-center w-full">
      <Title title="about" />
      <Buttons setSelected={setSelected} selected={selected} />
      <TimeLine selected={selected}/>
    </div>
  )
}

export default About;
