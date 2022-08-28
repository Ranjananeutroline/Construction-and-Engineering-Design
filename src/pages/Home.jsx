import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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

function Home() {
  return (
    <>
    <div className='bg-white'>
    <NavLink />
    <ScrollToTop />
    <Carousel />
    <AboutUs />
    <OurServices />
    <OurWorks />
    <OurTeam />
    <OurClients />
    <Contact />
    {/* <GetInTouch /> */}
    <GoToTop />
    <Footer />
    </div>
    </>
  )
}

export default Home