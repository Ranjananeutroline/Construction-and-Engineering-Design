import React from 'react'
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "./image/banner.jpg"
export const Banner = () => {
  return (
    <div className='banner'>
         <figure className='position-relative'>
    <img src={banner} alt="banner"  className='img-fluid'/>
</figure>
    </div>
  
  )
}
export default Banner ;