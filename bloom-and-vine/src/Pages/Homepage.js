import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewSlider from '../Components/review-slider/ReviewSlider';
import RedirectImages from '../Components/redirect-images/RedirectDisplay';
import InstagramShoutout from '../Components/instagram-shoutout/InstagramShoutout';
import InstagramPostsCarousel from '../Components/instagram-posts-carousel/InstagramPostsCarousel';
import homepageFrontDisplay from '../Images/homepageFrontDisplay.jpg'
import ScrollToTopButton from '../Components/scroll-to-top-button/scrollToTop';
import './Homepage.css';

const options = {
    method: 'GET',
    mode: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    }
}

const QUERY_URL = `/api/instagram-posts`

function Homepage() {
    const [postData, setPostData] = useState(null)

	useEffect(() => {
		async function fetchPostData() {
			const data = await axios.get(QUERY_URL, options).then(res => res.data.data)
		setPostData(data);
		}
		fetchPostData();
	}, [])

	return (
		<div className="Homepage">
			<div className='front-display'>
				<img className="front-image" src={homepageFrontDisplay}/>
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
				{postData && <InstagramPostsCarousel data={postData} />}
			</div>

			<div className='scroll-to-top-container-homepage'>
				<ScrollToTopButton />
			</div>
			
		</div>
  	);
}

export default Homepage;