import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "../component/Banner";
import  Service  from "../component/Service";
import  Ourprocess  from "../component/Ourprocess";
import Ourclient  from "../component/Ourclient";
import  Testomonial from "../component/Testomonial";

const Servicesanotherr = () => {
  return (
    <div >
    <Banner />
    <Service />
    <Ourprocess />
    <Ourclient />
    <Testomonial />
    </div>
  )
}

export default Servicesanotherr