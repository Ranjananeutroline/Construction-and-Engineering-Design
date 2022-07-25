import React from "react";
import { useState } from "react";

import "./about.css";
import OurPeople from "../component/OurPeople/OurPeople";
import OurTeam from "../component/OurTeam/OurTeam";
import Slider from "../component/Slider/Slider";
// import Vision from '../component/Vision/Vision';
import Vision from "../component/Vision/Vision";
import WhoWeAre from "../component/WhoWeAre/WhoWeAre";
import Location from "../component/Location/Location";
import Job from "../component/Job/Job";
import Navbar from "../components/home/Navbar/Navbar";
import Footer from "../components/home/Footer/Footer";

const About = () => {
  return (
    <div className="aboutSection">
      <Navbar />
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
