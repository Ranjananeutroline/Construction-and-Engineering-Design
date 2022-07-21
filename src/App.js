import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { Banner } from "./component/Banner";
import  Service  from "./component/Service";
import  Ourprocess  from "./component/Ourprocess";
import Ourclient  from "./component/Ourclient";
import { Testomonial } from "./component/Testomonial";

function App() {
  return (

    <div>
    <Banner/> 
    <Service /> 
     <Ourprocess />
    <Ourclient />
    <Testomonial />
  
    </div>
    
    

    

  );
}


export default App;
