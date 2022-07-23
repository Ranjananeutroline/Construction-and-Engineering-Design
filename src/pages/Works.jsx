import React from 'react'
import Navbar from '../components/home/Navbar/Navbar'
import OurRecentWorks from '../components/Works/OurRecentWorks/OurRecentWorks'
import ShowProjects from '../components/Works/ShowProjects/ShowProjects'
import Footer from "../components/home/Footer/Footer"
import OurWorkAreas from '../components/Works/OurWorkAreas/OurWorkAreas'

function Works() {
  return (
    <>
    <Navbar />
    <OurRecentWorks />
    <ShowProjects />
    <OurWorkAreas/>
    <Footer />
  
    </>
  )
}

export default Works