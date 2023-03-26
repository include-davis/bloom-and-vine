import './contactDisplay.css'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import arrow from "../../Images/upArrow.png"

import React, { useState } from 'react';

import PrimaryImage from '../gallery-image-sizing/primaryImage';
import SecondaryImage from '../gallery-image-sizing/secondaryImage';
import TertiaryImage from '../gallery-image-sizing/tertiaryImage';

import Wedding from '../../Images/weddingPrimary.png'
import Wedding2 from '../../Images/weddingSecondary.png'

function scrollToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

let imagesList = [pic1, pic2, pic3, pic4, pic5];
// index 0 = background
// index 1 = secondary
// index 2 = primary
// index 3 = secondary
// index 4 = background


function goRight() {
    let newList = [imagesList[4], imagesList[0], imagesList[1], imagesList[2], imagesList[3]];
}

function goLeft() {
    let newList = [imagesList[1], imagesList[2], imagesList[3], imagesList[4], imagesList[0]];
}




export default function ContactDisplay () {
    return (
	    <div>
			<p id = "bottomText">Interested in booking for an event?</p>
            <div id = "bottomButtons">

                {/* The page stops working with the navlink, should be fixed once its merged with the other pages.
                    I replaced the NavLink with a Div to allow for testing.

                <NavLink id = "contactButtonM" to="/Contact">
                    <div >Contact Us</div>
                </NavLink>
                */}

                <div id = "contactButtonM">
                    <div >Contact Us</div>
                </div>

                <img onClick= {scrollToTop} id = "arrowButton" src={arrow}  />
            </div>

            <div id = "test">
                <TertiaryImage img = {Wedding2}/>
                <SecondaryImage img = {Wedding}/>
                <PrimaryImage img = {Wedding2}/>
                <SecondaryImage img = {Wedding}/>
                <TertiaryImage img = {Wedding2}/>
            </div>

        </div>
    );
}