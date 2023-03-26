import NavBar from '../Components/Navbar'
import GalleryDisplay from '../Components/gallery-display/galleryDisplay'
import ContactDisplay from '../Components/contact-display/contactDisplay'
import GallerySlider from '../Components/gallery-slider/gallerySlider'
import Footer from '../Components/Footer'
import './Gallery.css';

function Gallery() {
  return (
    <div className="Gallery">
		<NavBar />


		<div className="gallery-display">
			<GallerySlider />
		</div>

		<div className="contact-display">
			<ContactDisplay />
		</div>

		<Footer />
    </div>
  );
}

export default Gallery;
