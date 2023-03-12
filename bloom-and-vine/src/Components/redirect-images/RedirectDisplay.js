import RedirectImage from './Components/redirect-image/RedirectImage'
import GalleryImg from '../../Images/gallery.jpg'
import ServicesImg from '../../Images/services.jpg'
import AboutImg from '../../Images/about.jpg'
import ContactImg from '../../Images/contact.jpg'
import './RedirectDisplay.css'

export default function RedirectDisplay() {
    return (
        <div className='redirect-image-container'>
            <RedirectImage redirect={'Gallery'} img={GalleryImg} />
            <RedirectImage redirect={'Services'} img={ServicesImg} />
            <RedirectImage redirect={'About'} img={AboutImg} />
            <RedirectImage redirect={'Contact'} img={ContactImg} />
        </div>
    )
}