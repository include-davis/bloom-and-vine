import topOfPageArrow from "../../Images/topOfPageArrow.png"
import './scrollToTop.css'

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

export default function ScrollToTopButton() {
    return (
        <img onClick= {scrollToTop} className="scroll-to-top-button" src={topOfPageArrow} />
    )
}