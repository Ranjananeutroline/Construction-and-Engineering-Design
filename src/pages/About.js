import React, { Suspense } from "react";
import "./about.css";
// import OurPeople from "../components/about/OurPeople/OurPeople";
// import OurTeam from "../components/about/OurTeam/OurTeam";
// import Slider from "../components/about/Slider/Slider";
// import Vision from '../component/Vision/Vision';
// import Vision from "../components/about/Vision/Vision";
import WhoWeAre from "../components/about/WhoWeAre/WhoWeAre";
// import Location from "../components/about/Location/Location";
// import Job from "../components/about/job/Job";
import NavLink from "../components/home/Navbar/NavLink";
import GoToTop from "../components/home/Gotop/GoToTop";
import Footer from "../components/home/Footer/Footer";
import OurPeopleCarousel from "../components/about/Slider/OurPeopleCarousel";
import ScrollToTop from "../components/home/Gotop/ScrollToTop";
const OurPeople = React.lazy(() =>
  import("../components/about/OurPeople/OurPeople")
);
const OurTeam = React.lazy(() => import("../components/about/OurTeam/OurTeam"));
const Vision = React.lazy(() => import("../components/about/Vision/Vision"));
const Job = React.lazy(() => import("../components/about/job/Job"));

const About = () => {
  return (
    <div className="aboutSection">
      <NavLink />
      <ScrollToTop />
      {/* <Slider /> */}
      <OurPeopleCarousel />
      <WhoWeAre />
      <Suspense fallback={<div>Loading...</div>}>
        <OurTeam />
        <Vision />
        <OurPeople />
     
      <Job />
      </Suspense>
      {/* <Location /> */}
      <GoToTop />
      <Footer />
    </div>
  );
};

export default About;
