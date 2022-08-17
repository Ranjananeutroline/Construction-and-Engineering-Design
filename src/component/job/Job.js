import React from 'react'
import './job.css'
const Job = () => {
  return (
    <div className="mainJob">
    {/*<h2>Career</h2> */} 
    <div className="flexJob">
    <div className="jobImage"><img src="./images/job.png" alt="" /></div>
    <div className="jobContent">
    <h2>Careers at Company </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus obcaecati cum voluptatem, error voluptatum expedita odio minima dicta libero natus eius non provident facilis voluptas voluptatibus nam tempora. Quibusdam, quis?</p>
    <button className=' d-grid mx-auto justify-content-center bg-info'>Current Openings</button>
    </div>
    </div>
    </div>
  )
}

export default Job