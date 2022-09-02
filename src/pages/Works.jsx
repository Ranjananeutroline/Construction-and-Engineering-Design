import React from 'react'
import OurRecentWorks from '../components/Works/OurRecentWorks/OurRecentWorks'
import Footer from "../components/home/Footer/Footer"
import OurWorkAreas from '../components/Works/OurWorkAreas/OurWorkAreas'
import ProjectWork from '../components/Works/ShowProjects/ProjectWork'
import NavLink from "../components/home/Navbar/NavLink";
import GoToTop from '../components/home/Gotop/GoToTop'
import ScrollToTop from '../components/home/Gotop/ScrollToTop'

function Works() {
  return (
    <>
    <NavLink />
    <ScrollToTop/>
    <OurRecentWorks />
    <ProjectWork />
    <OurWorkAreas/>
    <GoToTop />
    <Footer />
    {/* <WorkFooter /> */}
  
    </>
  )
}

export default Works