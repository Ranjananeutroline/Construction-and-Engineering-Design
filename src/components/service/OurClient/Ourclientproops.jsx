import React from "react";
import "./ourclient.css";

function Ourclientproops({ clientPicture, cname }) {
  return (
    <div className="cpicture">
      <img
        src={clientPicture}
        className="ClientPicture"
        alt="image_of_client"
      />
<div className="client_text">
      <h4 className="cnames">{cname}</h4>
      <hr
        className="line"
        style={{
          width: "60%",
          color: "blue",
       margin:"auto",
        }}
      />
</div>
  
    </div>
  );
}

export default Ourclientproops;
