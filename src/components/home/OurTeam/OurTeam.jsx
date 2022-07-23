import React from 'react'

import "./ourTeam.css"
function OurTeam() {
  return (
    <>
     <h1 style={{textAlign:"center"}}>Our Team</h1>
    <p style={{textlign:"center"}}>"Success is best when it's shared"</p><br />
    <div className="container-fluid p-5" style={{backgroundColor:"rgb(231, 243, 247)",padding:"100px"}}>
        <div className="container-sm" 
            style={{backgroundColor:"white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
            <div className="owl-carousel owl-theme">
                <div className="item p-5">
                    <img src="image/team1.jpg"
                        style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt=" our team mate" />
                    <h5 style={{textAlign: "center", paddingTop: "15px"}}>Team 1</h5>
                    <p
                        style={{textAlign: "center", fontSize:"13px", padding: "20px", fontFamily: "calibri", paddingTop: "5px;"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="item p-5">
                    <img src="image/team2.jpg"
                        style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="team mates"/>
                    <h5 style={{textAlign: "center", paddingTop: "15px"}}>Team 2</h5>
                    <p
                        style={{textAlign: "center",fontSize:"13px", padding: "20px", fontFamily: "calibri", paddingTop: "5px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="item p-5">
                    <img src="image/team2.jpg"
                        style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="team mates" className='team_photo'/>
                    <h5 style={{textAlign: "center", paddingTop: "15px"}}>Team 2</h5>
                    <p
                        style={{textAlign: "center",fontSize:"13px", padding: "20px", fontFamily: "calibri", paddingTop: "5px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="item p-5">
                    <img src="image/team2.jpg"
                        style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="team mates"/>
                    <h5 style={{textAlign: "center", paddingTop: "15px"}}>Team 2</h5>
                    <p
                        style={{textAlign: "center",fontSize:"13px", padding: "20px", fontFamily: "calibri", paddingTop: "5px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="item p-5">
                    <img src="image/team2.jpg"
                        style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="team mates"/>
                    <h5 style={{textAlign: "center", paddingTop: "15px"}}>Team 2</h5>
                    <p
                        style={{textAlign: "center",fontSize:"13px", padding: "20px", fontFamily: "calibri", paddingTop: "5px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="item p-5">
                    <img src="image/team2.jpg"
                        style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="team mates"/>
                    <h5 style={{textAlign: "center", paddingTop: "15px"}}>Team 2</h5>
                    <p
                        style={{textAlign: "center",fontSize:"13px", padding: "20px", fontFamily: "calibri", paddingTop: "5px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
        </div>
    </div>
    <br/><br/><br/>
    
    </>
  )
}

export default OurTeam