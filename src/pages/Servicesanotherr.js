import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner}  from "../components/service/Banner/Banner";
import  Service  from "../components/service/Service/Service";
import  Ourprocess  from "../components/service/OurProcess/Ourprocess";
import Ourclient  from "../components/service/OurClient/Ourclient";
import  {Testomonial} from "../components/service/Testimonial/Testomonial";
import NavLink from '../components/home/Navbar/NavLink';
import Footer from '../components/home/Footer/Footer';
import GoToTop from '../components/home/Gotop/GoToTop';
import ScrollToTop from '../components/home/Gotop/ScrollToTop';
import FormModal from '../components/contact-us/PopupForm/FormModal';

const Servicesanotherr = () => {
  return (
    <div >
   <NavLink />
  <ScrollToTop />
    <Banner />
    <Service />
    <FormModal />
    <Ourprocess />
    <Ourclient />
    <Testomonial />
    <GoToTop />
    <Footer />
    </div>
  )
}

export default Servicesanotherr