import './Services.css';
import ServiceBarList from '../Components/serviceComponents/serviceBarList';
import ServicesCarousel from '../Components/serviceComponents/carousel';
import ServicesMobile from '../Components/serviceComponents/servicesMobile/servicesMobile';

import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Services() {
  const [index, setIndex] = useState(0);
  const width = window.innerWidth;

  if(width > 970){
    return (
      <div className="Services">
        <Navbar/>
        <ServiceBarList index = {index} setIndex = {setIndex}/>
        <ServicesCarousel index = {index} setIndex = {setIndex}/>
        <Footer/>
      </div>
    );
  }
  else{
    return(
      <ServicesMobile/>
    );
  }
  
}

export default Services;
