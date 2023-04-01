import { NavLink } from "react-router-dom";
import ScrollToTopButton from "../scroll-to-top-button/scrollToTop";
import './contactDisplay.css'

export default function ContactDisplay () {
    return (
	    <div>
			<p id = "bottomText">Interested in booking for an event?</p>
            <div id = "bottomButtons">
                <NavLink id = "contactButtonM" to="/Contact">
                    <div >Contact Us</div>
                </NavLink>
                <ScrollToTopButton />
            </div>

        </div>
    );
}