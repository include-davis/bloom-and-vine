import "./serviceMobile.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import ServiceSquare from "./serviceSquare";

import wedding from "../../../Images/weddings.png"
import rentals from "../../../Images/rentals.png"
import funerals from "../../../Images/funerals.png"
import classes from "../../../Images/classes.png"
import parties from "../../../Images/parties.png"
import customOrder from "../../../Images/customOrder.png"
import arrow from "../../../Images/upArrow.png"

function scrollToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function ServiceList(props) {
  
    return (
        <div id ="mobileView">
            <h1 id="mobileHeader">Services</h1>
            <ServiceSquare setTo = {1} setCurrentRender ={props.setCurrentRender} img = {wedding} name="Weddings"/>
            <ServiceSquare setTo = {2} setCurrentRender ={props.setCurrentRender} img = {rentals} name="Rentals"/>
            <ServiceSquare setTo = {3}setCurrentRender ={props.setCurrentRender} img = {funerals} name="Funerals"/>
            <ServiceSquare setTo = {4} setCurrentRender ={props.setCurrentRender} img = {classes} name="Classes"/>
            <ServiceSquare setTo = {5} setCurrentRender ={props.setCurrentRender} img = {parties} name="Parties"/>
            <ServiceSquare setTo = {6} setCurrentRender ={props.setCurrentRender} img = {customOrder} name="Custom Order"/>

            <p id = "bottomText">Interested in booking for an event?</p>
            <div id = "bottomButtons">
                <NavLink id = "contactButtonM"to="/Contact">
                    <div >Contact Us</div>
                </NavLink>
                <img onClick= {scrollToTop} id = "arrowButton" src={arrow}  />
            </div>
        </div>
    );
  }
  
  export default ServiceList;