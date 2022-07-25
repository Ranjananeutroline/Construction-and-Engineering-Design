import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "../components/home/Navbar/Navbar";
import Carousel from '../components/home/Carousel/Carousel';
import AboutUs from '../components/home/AboutUs/AboutUs';
import OurServices from '../components/home/OurServices/OurServices';
import OurTeam from '../components/home/OurTeam/OurTeam';
import OurClients from '../components/home/OurClients/OurClients';
import ContactUs from '../components/home/ContactUs/ContactUs';
import Footer from '../components/home/Footer/Footer';
import OurWorks from '../components/home/OurWorks/OurWorks';

function Home() {
  return (
    <>
    <div className='bg-white'>
    <Navbar />
    <Carousel />
    <AboutUs />
    <OurServices />
    <OurWorks />
    <OurTeam />
    <OurClients />
    <ContactUs />
    <Footer />
    </div>
    </>
  )
}

export default Home