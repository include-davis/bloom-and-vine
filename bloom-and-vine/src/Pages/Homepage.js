import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ReviewSlider from '../Components/review-slider/ReviewSlider';
import RedirectImages from '../Components/redirect-images/RedirectDisplay';
import InstagramShoutout from '../Components/instagram-shoutout/InstagramShoutout';
import InstagramPostsCarousel from '../Components/instagram-posts/InstagramPostsCarousel';
import InstagramPost from '../Components/instagram-posts/components/InstagramPost';
import displayImg from '../Images/DISPLAY-60_cropped.jpg'
import axios from 'axios';
import './Homepage.css';

// Put equal spacing between img, reviews, & instagram shoutout (DONE)

// Indication that redirect has been clicked (darkened image) for mobile (done?)

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
			let data = await axios.get(QUERY_URL, options).then(res => res.data.data)
			data = data.map((post, index)  => {
				return (
					<InstagramPost data={post} key={index} />
				);
			})
		setPostData(data);
		}
		fetchPostData();
	}, [])

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
				{postData && <InstagramPostsCarousel data={postData} />}
			</div>
		
			<Footer />
		</div>
  	);
}

export default Homepage;
