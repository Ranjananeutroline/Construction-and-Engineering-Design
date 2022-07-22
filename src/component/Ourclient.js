import React from 'react'
import Ourclientproops from './Ourclientproops'
import  "./ourclient.css"


function Ourclient() {
  return (
    <div >
     <h1 className='headind'> Our Client</h1>
    
     <div  className='cgrid'>
      <Ourclientproops clientPicture={require('./image/logo5.png')}/>      
      <Ourclientproops clientPicture={require('./image/logo2.png')}/>
      <Ourclientproops clientPicture={require('./image/logo3.png')}/>
      <Ourclientproops clientPicture={require('./image/logo4.png')}/>
      <Ourclientproops clientPicture={require('./image/logo5.png')}/>
      <Ourclientproops clientPicture={require('./image/logo6.png')}/>
     
    </div>
    </div>
    
  )
}

export default Ourclient