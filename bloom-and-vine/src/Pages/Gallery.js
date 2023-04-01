import GalleryDisplay from '../Components/gallery-display/galleryDisplay'
import ContactDisplay from '../Components/contact-display/contactDisplay'
import './Gallery.css';

import GalleryDisplayMobile from '../Components/gallery-display-mobile/galleryDisplayMobile';

function Gallery() {
	const width = window.innerWidth;


	/*
	For testing, I return the mobile version of the gallery page 
	when at 500 pixel width or less
	
	*/
	if (width <= 500){
		return(
			<div>
				<GalleryDisplayMobile/>

				<ContactDisplay />
			</div>	
		)
	}
	else{
		return (
			<div className="Gallery">

				<div className='gallery-display'>
					<GalleryDisplay/>
				</div>
				
				<div className="contact-display">
					<ContactDisplay />
				</div>

			</div>
		);
	}
}

export default Gallery;