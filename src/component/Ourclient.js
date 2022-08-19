import React from 'react'
import Ourclientproops from './Ourclientproops'
import  "./ourclient.css"


function Ourclient() {
  return (
    <div className='ourclientsection'>
     <h2 className='nclient' > Our Clients</h2>
    
     <div  className='cgrid' >
      <Ourclientproops clientPicture={require('./image/logo5.jpg')}
      cname='Nepal Government'/>      
      <Ourclientproops clientPicture={require('./image/logo2.jpg')}
      cname='NeutroLine'/>
      <Ourclientproops clientPicture={require('./image/logo3.jpg')}
      cname='Mercedes'/>
      <Ourclientproops clientPicture={require('./image/logo4.jpg')}
      cname='Tansen Cemente'/>
      <Ourclientproops clientPicture={require('./image/logo1.jpg')}
      cname='United Mission Hospital'/>
      <Ourclientproops clientPicture={require('./image/logo6.jpg')}
      cname='Tata Motor'/>
     
    </div>
    </div>
    
  )
}

export default Ourclient