import React from "react";
import Cards from "../components/contact-us/Card/Cards";
import Header from "../components/contact-us/Header/Header";
import MessengerChatHead from "../components/contact-us/MessengerChatHead/MessengerChatHead";
import Footer from "../components/home/Footer/Footer"
import Contact from "../components/home/Contact/Contact";
import NavLink from "../components/home/Navbar/NavLink";
import FormModal from "../components/contact-us/PopupForm/FormModal";
import GoToTop from "../components/home/Gotop/GoToTop";
import ScrollToTop from "../components/home/Gotop/ScrollToTop";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../components/contact-us/ErrorBoundaries/ErrorBoundaries";

function ContactUs() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavLink />
      <ScrollToTop/>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}} >
      <FormModal />
      </ErrorBoundary>
      <MessengerChatHead />
      <Cards />
      <Contact />
      <GoToTop />
      <Footer />
    </div>
  );
}


export default ContactUs;
