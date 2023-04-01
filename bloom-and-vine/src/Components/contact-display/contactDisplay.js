import './contactDisplay.css'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import arrow from "../../Images/whiteUpArrow.png"

import Wedding from '../../Images/weddingPrimary.png'
import Wedding2 from '../../Images/weddingSecondary.png'

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
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

        </div>
    );
}