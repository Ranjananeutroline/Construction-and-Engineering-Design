import React from "react";

function WorkAreasProps({image,heading}) {
  return (
    <>
      <div className="col-sm-3 work_card">
        <div
          className="polaroid p-2"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <img
            // src="image/workpageimg/workareaimg1.jpg"
            src={image}
            style={{ height: 200, width: "100%" }}
            alt="construction people working "
          />

          <div className="psmall-div pt-3 pb-1">
            <p
              style={{
                textAlign: "center",
                fontWeight: 500,
                fontSize: 18,
              }}
            >
              {heading}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkAreasProps;
