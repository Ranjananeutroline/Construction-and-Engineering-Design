import React from "react";
import { FaRegEye, FaRegPaperPlane, FaRegClock } from "react-icons/fa";
import { useState } from "react";

// import "./vision.css"
import "./vision.css";
import Visiondisc from "./Visiondisc";
import Missiondisc from "./Missiondisc";
import Historydisc from "./Historydisc";
function Vision() {

const [dis,setDis]=useState(<Visiondisc />)
 const his=()=>{
  setDis(<Historydisc />);
 }
 const vis=()=>{
  setDis(<Visiondisc />);
 }
 const mis=()=>{
  setDis(<Missiondisc />);
 }

  return (
    <>
    <div className="vision_flex">
    <div className="vision_flex_box">
      <div className="fourth ">
        {/*<div className="box"></div>*/}  
        <div className="box1" onClick={vis}>
         <FaRegEye className="vision" />
          <h4 className="visions" >Vision</h4>
          <div className="overlay"></div>
        </div>
        <div className="box1" onClick={mis}>
          <FaRegPaperPlane className="mission"  />
          <h4 className="visions">Mission</h4>
          <div className="overlay"></div>
        </div>

        <div className="box1 " onClick={his}>
          <FaRegClock className="history" />
          <h4 className="visions" >History</h4>
          <div className="overlay"></div>
        </div>
         {/*<div className="box"></div>*/} 
      </div>
     
        <div className="vision_image_grid">
          <div className="content">
          {dis}
          </div>
          <div className="vision_image ">
            <img className="visionpic" src="/images/vision.jpg" alt="" />
          </div>
        </div>
        </div>
        </div>
       
    </>
  );
}

export default Vision;
