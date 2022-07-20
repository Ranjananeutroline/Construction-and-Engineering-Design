import React from 'react'
import { useState } from 'react';

import './about.css'
import OurPeople from '../component/OurPeople/OurPeople';
import OurTeam from '../component/OurTeam/OurTeam';
import Slider from '../component/Slider/Slider';
import Vision from '../component/Vision/Vision';
import WhoWeAre from '../component/WhoWeAre/WhoWeAre';
import Job from '../component/Job/Job';
import Location from '../component/Location/Location';

const About = () => {
  
  return (
    <div className="aboutSection">
   <Slider />
   <WhoWeAre />
   <OurTeam />
   <Vision />
<OurPeople /> 
   <Job />
    <Location />
    </div>
  )
}

export default About