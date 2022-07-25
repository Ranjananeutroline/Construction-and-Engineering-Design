import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import "./app.css";
import Home from "./pages/Home";
import Works from "./pages/Works";
function App() {
  return (
    <>
      {/* <div className="container"> */}
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </>
  );
}

export default App;
