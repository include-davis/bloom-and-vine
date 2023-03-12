import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ReviewSlider from '../Components/Review-Slider/ReviewSlider';
import RedirectImages from '../Components/Redirect-Images/RedirectDisplay';
import InstagramShoutout from '../Components/Instagram-Shoutout/InstagramShoutout';
import InstagramPostsSlider from '../Components/Instagram-Posts/InstagramPostsSlider';
import displayImg from '../Images/DISPLAY-60_cropped.jpg'
import './Homepage.css';

// Put equal spacing between img, reviews, & instagram shoutout (DONE)

// Indication that redirect has been clicked (darkened image) for mobile

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
        <RedirectImages />
      </div>

      <div className='instagram-shoutout-display'>
        <InstagramShoutout />
      </div>
      
      <div className='instagram-posts-display'>
        <InstagramPostsSlider />
      </div>
      
      <Footer />
    </div>
  );
}

export default Homepage;
