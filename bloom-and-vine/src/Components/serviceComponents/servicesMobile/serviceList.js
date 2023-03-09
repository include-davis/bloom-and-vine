import "./serviceMobile.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import ServiceSquare from "./serviceSquare";

import wedding from "../../../Images/weddings.png"
import rentals from "../../../Images/rentals.png"
import funerals from "../../../Images/funerals.png"
import classes from "../../../Images/classes.png"
import parties from "../../../Images/parties.png"
import customOrder from "../../../Images/customOrder.png"

function ServiceList() {
  
    return (
        <div id ="mobileView">
            <h1 id="mobileHeader">Services</h1>
            <ServiceSquare img = {wedding} name="Name"/>
            <ServiceSquare img = {rentals} name="Name"/>
            <ServiceSquare img = {funerals} name="Name"/>
            <ServiceSquare img = {classes} name="Name"/>
            <ServiceSquare img = {parties} name="Name"/>
            <ServiceSquare img = {customOrder} name="Name"/>

            <p>Interested in booking for an event?</p>
            <div>
                <NavLink id = "contactButtonM"to="/Contact">
                    <div >Contact Us</div>
                </NavLink>
                <p>Image here</p>
            </div>
        </div>
    );
  }
  
  export default ServiceList;