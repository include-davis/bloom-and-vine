import React, { useState, useEffect } from 'react';

import ServiceList from "./serviceList";
import ServiceDisplayMobile from "./serviceDisplayMobile";

import wedding from "../../../Images/weddings.png"
import rentals from "../../../Images/rentals.png"
import funerals from "../../../Images/funerals.png"
import classes from "../../../Images/classes.png"
import parties from "../../../Images/parties.png"
import customOrder from "../../../Images/customOrder.png"
import arrow from "../../../Images/upArrow.png"

function ServicesMobile() {

    const [currentRender, setCurrentRender] = useState(0);
  
    var images = [
        {
          service: "Wedding Services",
          src: wedding,
          description: "Need a hand on your special day? We offer a variety of wedding services ranging from making beautiful bouquets to DIYing wedding centerpieces! Our flowers are sourced from local farms and are hand chosen to cater to you and your vision. You can count on us to make your wedding unforgettable. Let’s get in touch!"
        },
        {
          service: "Rentals",
          src: rentals,
          description: "2nd img words words words words words words words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Funerals",
          src: funerals,
          description: "3rd img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Classes",
          src: classes,
          description: "4th img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Parties",
          src: parties,
          description: "5th img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Custom Orders",
          src: customOrder,
          description: "6th img words words words words words words words words words words words words words words words words words words words words words words "
        }
      ];

    let componentsArray = [
        <ServiceList setCurrentRender ={setCurrentRender}/>,
        
        <ServiceDisplayMobile setCurrentRender ={setCurrentRender} image = {images[0].src} service = {images[0].service} description = {images[0].description}/>,
        <ServiceDisplayMobile setCurrentRender ={setCurrentRender} image = {images[1].src} service = {images[1].service} description = {images[1].description}/>,
        <ServiceDisplayMobile setCurrentRender ={setCurrentRender} image = {images[2].src} service = {images[2].service} description = {images[2].description}/>,
        <ServiceDisplayMobile setCurrentRender ={setCurrentRender} image = {images[3].src} service = {images[3].service} description = {images[3].description}/>,
        <ServiceDisplayMobile setCurrentRender ={setCurrentRender} image = {images[4].src} service = {images[4].service} description = {images[4].description}/>,
        <ServiceDisplayMobile setCurrentRender ={setCurrentRender} image = {images[5].src} service = {images[5].service} description = {images[5].description}/>
    ]

    return (
        <div>
            {componentsArray[currentRender]}
        </div>
        
    );
  }
  
  export default ServicesMobile;