import Navbar from '../Components/Navbar'
import ReviewSlider from '../Components/review-slider/ReviewSlider';
import InstagramShoutout from '../Components/instagram-shoutout/InstagramShoutout';
import InstagramPosts from '../Components/instagram-posts/InstagramPosts';
import displayImg from './images/DISPLAY-60.jpg'
import './Homepage.css';

function Homepage() {
  // Create custom hook to return the current review displayed

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
        <h1>Redirect Images</h1>
      </div>

      <div className='instagram-display'>
        <InstagramShoutout />
        <InstagramPosts />
      </div>

    </div>
  );
}

export default Homepage;
