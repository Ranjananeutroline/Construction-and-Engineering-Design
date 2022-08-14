import React from 'react'
import "./serviceProp.css"
function ServiceProp({heading,description ,image}) {
  return (
         <div className="App apple">
           <img src={image} 
           className="photo"
           alt="imageofservice" /> 
      <article className="explanation">
       
        <h5>{heading}</h5>
        <p>
        {description}
        </p>
      </article>
     </div>
  )
}

export default ServiceProp 