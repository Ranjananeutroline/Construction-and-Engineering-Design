import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "../components/home/Navbar/Navbar";
import Carousel from '../components/home/Carousel/Carousel';
import AboutUs from '../components/home/AboutUs/AboutUs';
import OurServices from '../components/home/OurServices/OurServices';
import OurTeam from '../components/home/OurTeam/OurTeam';
import OurClients from '../components/home/OurClients/OurClients';
import Contact from '../components/home/Contact/Contact';
import Footer from '../components/home/Footer/Footer';
import OurWorks from '../components/home/OurWorks/OurWorks';
import NavLink from '../components/home/Navbar/NavLink';
import GoToTop from '../components/home/Gotop/GoToTop';
import ScrollToTop from '../components/home/Gotop/ScrollToTop';
// import GetInTouch from "../components/contact-us/GetInTouch/GetInTouch"

function Home() {
  return (
    <>
    <div className='bg-white'>
    {/* <Navbar /> */}
    <NavLink />
    <ScrollToTop />
    <Carousel />
    <AboutUs />
  
    <OurServices />
    <OurWorks />
    <OurTeam />
    <OurClients />

    <Contact />
    <GoToTop />
    <Footer />
    </div>
    </>
  )
}

export default Home