import React from 'react'
import ReviewSlider from '../Components/review-slider/ReviewSlider';
import RedirectImages from '../Components/redirect-images/RedirectDisplay';
import InstagramShoutout from '../Components/instagram-shoutout/InstagramShoutout';
import InstagramPostsSlider from '../Components/instagram-posts/InstagramPostsSlider';
import displayImg from '../Images/DISPLAY-60_cropped.jpg'
import './Homepage.css';

// Put equal spacing between img, reviews, & instagram shoutout (DONE)

// Indication that redirect has been clicked (darkened image) for mobile (done?)

function Homepage() {

  return (
    <div className="Homepage">

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

    </div>
  );
}

export default Homepage;
