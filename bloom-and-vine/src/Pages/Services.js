import './Services.css';
import ServiceBarList from '../Components/serviceBarList';
import ServicesCarousel from '../Components/carousel';

import React, { useState, useEffect } from 'react';

function Services() {
  const [index, setIndex] = useState(0);

  return (
    <div className="Services">
      <ServiceBarList index = {index} setIndex = {setIndex}/>
      <ServicesCarousel index = {index} setIndex = {setIndex}/>
    </div>
  );
}

export default Services;
