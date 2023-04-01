import './Services.css';
import ServiceBarList from '../Components/serviceComponents/servicesDesktop/serviceBarList';
import ServicesCarousel from '../Components/serviceComponents/servicesDesktop/carousel';
import ServicesMobile from '../Components/serviceComponents/servicesMobile/servicesMobile';

import React, { useState, useEffect } from 'react';

function Services() {
  const [index, setIndex] = useState(0);
  const width = window.innerWidth;

  if(width > 800){
    return (
      <div className="Services">
        <ServiceBarList index = {index} setIndex = {setIndex}/>
        <ServicesCarousel index = {index} setIndex = {setIndex}/>
      </div>
    );
  }
  else {
    return (
      <ServicesMobile/>
    );
  }
  
}

export default Services;
