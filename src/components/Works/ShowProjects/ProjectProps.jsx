import React from "react";

function ProjectProps({image}) {
  return (
    <>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="building" />
        </div>
        <div className="flip-card-back p-4">
          <h5>Name</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectProps;
