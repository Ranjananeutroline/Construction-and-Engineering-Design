import React from 'react'
import  "./ourclient.css"

function Ourclientproops({clientPicture,title}) {
  return (
    <div className='cpicture'>
    <img src={clientPicture} 
className="ClientPicture"
alt="image_of_client" /> 
</div>
   
  )
}

export default Ourclientproops