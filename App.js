import logo from './logo.svg';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Servicesanotherr from './pages/Servicesanotherr';
import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import Works from "./pages/Works";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
   
      {/* <div className="container"> */}
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Servicesanotherr />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/works" element={<Works />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
   
   </div>
    
   
  );
}

export default App;
