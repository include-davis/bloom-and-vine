import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ReviewSlider from '../Components/review-slider/ReviewSlider';
import RedirectDisplay from '../Components/redirect-display/RedirectDisplay';
import InstagramShoutout from '../Components/instagram-shoutout/InstagramShoutout';
import InstagramPosts from '../Components/instagram-posts/InstagramPosts';
import displayImg from './images/DISPLAY-60.jpg'
import './Homepage.css';

function Homepage() {

  return (
    <div className="Homepage">
      <Navbar />

      <div className='front-display'>
      
        <img className="front-image" src={displayImg}/>
        <div className='front-text-container'>
          <p className='front-text'>Bloom & Vine</p>
        </div>

      </div>

      <div className='review-display'>
        <ReviewSlider />
      </div>

      <div className='redirect-display'>
        <RedirectDisplay />
      </div>

      <div className='instagram-display'>
        <InstagramShoutout />
        <InstagramPosts />
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
