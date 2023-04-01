import topOfPageArrow from '../../Images/topOfPageArrow.png'
import './scrollToTopButton.css'

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

export default function ScrollToTopButton() {
    return (
        <div class="scroll-container">
            <img className='scroll-to-top-button' src={topOfPageArrow} onClick={scrollToTop} />
        </div>
    );
}