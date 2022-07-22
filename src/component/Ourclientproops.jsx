import React from 'react'
import  "./ourclient.css"

function Ourclientproops({clientPicture,cname}) {
  return (
    <div className='cpicture'>
    <img src={clientPicture} 
className="ClientPicture"
alt="image_of_client" /> 
<h4 className='cnames'>{cname}</h4>
</div>
   
  )
}

export default Ourclientproops