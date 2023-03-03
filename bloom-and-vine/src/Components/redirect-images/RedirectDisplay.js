import RedirectImage from './components/redirect-image/RedirectImage'
import GalleryImg from './images/gallery.jpg'
import ServicesImg from './images/services.jpg'
import AboutImg from './images/about.jpg'
import ContactImg from './images/contact.jpg'
import './RedirectDisplay.css'

export default function RedirectDisplay() {
    // Could turn each image into a separate component
    return (
        <div className='image-container'>
            <RedirectImage redirect={'Gallery'} img={GalleryImg} />
            <RedirectImage redirect={'Services'} img={ServicesImg} />
            <RedirectImage redirect={'About'} img={AboutImg} />
            <RedirectImage redirect={'Contact'} img={ContactImg} />
        </div>
    )
}