import React from "react";

function OurPeopleProps({describe,name,position}) {
  return (
    <>
      <div className="image1 mb-3">
        <img src="/images/man.jpg" alt="" className="avtar" />
        <div className="overlay">
          <div className="text">
            {" "}
            <p className="company">
             {describe}
            </p>{" "}
          </div>
          <p className="people_name_position"
            style={{
              marginTop: "100%",
            
              color: "black",
            }}
          >
            {name}<br/>{position}
          </p>
        </div>
       
      </div>
    </>
  );
}

export default OurPeopleProps;
