import React from 'react'

function OurClientProps() {
  return (
    <>
      <div className="item client_box col-md-4 ">
            <img
              src="image/client2.jpg"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                padding: "5px",
                borderRadius: "50%",
                width:"100%",
              }}
              alt="company logo"
            />
            <h5
              style={{
                textAlign: "center",
                paddingTop: "18px",
                fontSize: "15px",
                paddingBottom: "8px",
              }}
            >
              Client 1
            </h5>
            <div style={{ borderTop: "1px solid" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "13px",
                  padding: "25px",
                  fontFamily: "calibri",
                  paddingTop: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
    </>
  )
}

export default OurClientProps