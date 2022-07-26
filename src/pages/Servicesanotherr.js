import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "../component/Banner";
import  Service  from "../component/Service";
import  Ourprocess  from "../component/Ourprocess";
import Ourclient  from "../component/Ourclient";
import  Testomonial from "../component/Testomonial";
import NavLink from '../components/home/Navbar/NavLink';
import Footer from '../components/home/Footer/Footer';

const Servicesanotherr = () => {
  return (
    <div >
   <NavLink />
    <Banner />
    <Service />
    <Ourprocess />
    <Ourclient />
    <Testomonial />
    <Footer />
    </div>
  )
}

export default Servicesanotherr