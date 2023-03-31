import RedirectImage from './components/redirect-image/RedirectImage'
import GalleryImg from '../../Images/galleryRedirect.jpg'
import ServicesImg from '../../Images/servicesRedirect.jpg'
import AboutImg from '../../Images/aboutRedirect.jpg'
import ContactImg from '../../Images/contactRedirect.jpg'
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