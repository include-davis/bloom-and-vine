import NavBar from '../Components/Navbar'
import GalleryDisplay from '../Components/gallery-display/galleryDisplay'
import ContactDisplay from '../Components/contact-display/contactDisplay'
import Footer from '../Components/Footer'
import './Gallery.css';

import GalleryDisplayMobile from '../Components/gallery-display-mobile/galleryDisplayMobile';

function Gallery() {
	const width = window.innerWidth;


	{/*
	For testing, I return the mobile version of the gallery page 
	when at 500 pixel width or less
	
	*/}
	if (width <= 500){
		return(
			<div>
				<NavBar/>

				<GalleryDisplayMobile/>

				<ContactDisplay />

				<Footer/>
			</div>	
		)
	}
	else{
		return (
			<div className="Gallery">
				<NavBar />

				<div className='gallery-display'>
					<GalleryDisplay/>
				</div>
				
				<div className="contact-display">
					<ContactDisplay />
				</div>

				<Footer />
			</div>
		);
	}
}

export default Gallery;
