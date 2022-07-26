import React from "react";

function OurTeamProps({image, heading }) {
  return (
    <>
      <div className="item team_prop">
        <img
          src={image}
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          alt=" our team mate"
        />
        <h5 style={{ textAlign: "center", paddingTop: "15px" }}>{heading}</h5>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            padding: "20px",
            fontFamily: "calibri",
            paddingTop: "5px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </>
  );
}

export default OurTeamProps;
