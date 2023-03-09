import React from 'react'
import './Services.css';
import ServiceBarList from '../Components/serviceBarList';
import ServicesCarousel from '../Components/carousel';

import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Services() {
  const [index, setIndex] = useState(0);

  return (
    <div className="Services">
      <Navbar/>
      <ServiceBarList index = {index} setIndex = {setIndex}/>
      <ServicesCarousel index = {index} setIndex = {setIndex}/>
      <Footer/>
    </div>
  );
}

export default Services;
