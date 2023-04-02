import "./Services.css";
import { Helmet } from "react-helmet";
import ServiceBarList from "../Components/serviceComponents/servicesDesktop/serviceBarList";
import ServicesCarousel from "../Components/serviceComponents/servicesDesktop/carousel";
import ServicesMobile from "../Components/serviceComponents/servicesMobile/servicesMobile";

import { useState } from "react";

function Services() {
  const [index, setIndex] = useState(0);
  const width = window.innerWidth;
  if (width > 800) {
    return (
      <div className="Services">
        <Helmet>
          <title>Bloom & Vine | Services</title>
        </Helmet>

        <ServiceBarList index={index} setIndex={setIndex} />
        <ServicesCarousel index={index} setIndex={setIndex} />
      </div>
    );
  } else {
    return (
      <div>
        <Helmet>
          <title>Bloom & Vine | Services</title>
        </Helmet>
        <ServicesMobile />
      </div>
    );
  }
}

export default Services;
