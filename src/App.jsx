// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CustomNavbar from './Components/Navbar/Navbar'; // Changed to CustomNavbar
import Section1  from './Components/Section 1/Section1';
import Section2 from './Components/Section2/Section2';
import { FaQuoteRight } from "react-icons/fa6";

import './App.css';
import Section3 from './Components/Section3/Section3';
import BasicExample from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';



const App = () => {


  return (
    <>
      <CustomNavbar />

      <Section1 />
    
      <Section2 />
   
      <Section3 />

      <BasicExample />

      <Section5 />

      <Contact />

      <Footer />

      







    

      

    </>
  );
}

export default App;

