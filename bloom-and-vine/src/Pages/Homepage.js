import { useState } from 'react';

import Navbar from '../Components/Navbar'
import UserReview from '../Components/Review';
import displayImg from './images/DISPLAY-60.jpg'
import './Homepage.css';

function Homepage() {
  // Create custom hook to return the current review displayed
  // const [review, setReview] = useState()
  const userReviews = [
    {
      'user': "tanweddingsandevents",
      'comment': "Such an exquisite day! Flowers were perfection."
    },
  ]

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
        {userReviews.map(review => 
          <UserReview review={review}/>
        )}
      </div>

      <div className='redirect-display'>
        <p>world</p>
      </div>

      <div className='instagram-display'>
        <p className='instagram-shoutout'>Check us out on Instagram!</p>
        <a className='instagram-tag' href='https://instagram.com'>@bloomandvine</a>
      </div>

    </div>
  );
}

export default Homepage;
