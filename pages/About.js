import React from "react";
import { useState } from "react";

import "./about.css";
import OurPeople from "../component/OurPeople/OurPeople";
import OurTeam from "../component/OurTeam/OurTeam";
import Slider from "../component/Slider/Slider";
// import Vision from '../component/Vision/Vision';
import Vision from "../component/Vision/Vision";
import WhoWeAre from "../component/WhoWeAre/WhoWeAre";
import Location from "../componentss/Location/Location";
import Job from "../componentss/job/Job";
import NavLink from "../components/home/Navbar/NavLink";
import Footer from "../components/home/Footer/Footer";

const About = () => {
  return (
    <div className="aboutSection">
     <NavLink />
      <Slider />
      <WhoWeAre />
      <OurTeam />
      <Vision />
      <OurPeople />
      <Job />
      <Location />
      <Footer />
     
    </div>
  );
};

export default About;
