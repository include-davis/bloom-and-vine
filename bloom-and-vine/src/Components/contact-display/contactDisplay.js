import ScrollToTopButton from "../scroll-to-top-button/scrollToTop";
import './contactDisplay.css'

export default function ContactDisplay () {
    return (
	    <div>
			<p id = "bottomText">Interested in booking for an event?</p>
            <div id = "bottomButtons">
                <a id = "contactButtonM" href="/Contact">
                    <div >Contact Us</div>
                </a>
            </div>
            <ScrollToTopButton />
        </div>
    );
}