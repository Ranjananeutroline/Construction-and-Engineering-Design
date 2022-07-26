import React from 'react'
import Navbar from '../components/home/Navbar/Navbar'
import OurRecentWorks from '../components/Works/OurRecentWorks/OurRecentWorks'
import ShowProjects from '../components/Works/ShowProjects/ShowProjects'
import Footer from "../components/home/Footer/Footer"
import OurWorkAreas from '../components/Works/OurWorkAreas/OurWorkAreas'
import ProjectWork from '../components/Works/ShowProjects/ProjectWork'
import NavLink from "../components/home/Navbar/NavLink";
// import WorkFooter from "../components/Works/ourWorksFooter/WorkFooter"

function Works() {
  return (
    <>
    {/* <Navbar /> */}
    <NavLink />
    <OurRecentWorks />
    {/* <ShowProjects /> */}
    <ProjectWork />
    <OurWorkAreas/>
    <Footer />
    {/* <WorkFooter /> */}
  
    </>
  )
}

export default Works