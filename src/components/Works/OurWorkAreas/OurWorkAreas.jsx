import React from "react";
import "./ourWorkAreas.css";
import WorkAreasProps from "./WorkAreasProps";
function OurWorkAreas() {
  return (
    <>
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "rgb(231, 243, 247)" }}
      >
        <h4
          style={{
            textAlign: "center",
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          OUR WORK AREAS
        </h4>
        <br />
        <div className="container p-5" style={{ backgroundColor: "white" }}>
          <div class="row p-3 justify-content-around">
            <WorkAreasProps heading="Building" image="image/workpageimg/workareaimg1.jpg"/>
            <WorkAreasProps heading="Industrial" image="image/workpageimg/workareaimg2.jpg"/>
            <WorkAreasProps heading="Mining" image="image/workpageimg/workareaimg3.jpg"/>
            <WorkAreasProps heading="Transportation" image="image/workpageimg/workareaimg4.jpg"/>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default OurWorkAreas;
