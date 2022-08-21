import React from "react";
import "./about.css";
import OurPeople from "../components/about/OurPeople/OurPeople";
import OurTeam from "../components/about/OurTeam/OurTeam";
import Slider from "../components/about/Slider/Slider";
// import Vision from '../component/Vision/Vision';
import Vision from "../components/about/Vision/Vision";
import WhoWeAre from "../components/about/WhoWeAre/WhoWeAre";
// import Location from "../components/about/Location/Location";
import Job from "../components/about/job/Job";
import NavLink from "../components/home/Navbar/NavLink";
import GoToTop from "../components/home/Gotop/GoToTop";
import Footer from "../components/home/Footer/Footer";
import OurPeopleCarousel from "../components/about/Slider/OurPeopleCarousel";

const About = () => {
  return (
    <div className="aboutSection">
     <NavLink />
      {/* <Slider /> */}
      <OurPeopleCarousel />
      <WhoWeAre />
      <OurTeam />
      <Vision />
      <OurPeople />
      <Job />
      {/* <Location /> */}
      <GoToTop />
      <Footer />
     
    </div>
  );
};

export default About;
