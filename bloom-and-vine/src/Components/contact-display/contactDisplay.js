import { NavLink } from "react-router-dom";
import topOfPageArrow from "../../Images/topOfPageArrow.png"
import './contactDisplay.css'

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
                <NavLink id = "contactButtonM" to="/Contact">
                    <div >Contact Us</div>
                </NavLink>
                <img onClick= {scrollToTop} id = "arrowButton" src={topOfPageArrow}  />
            </div>

        </div>
    );
}