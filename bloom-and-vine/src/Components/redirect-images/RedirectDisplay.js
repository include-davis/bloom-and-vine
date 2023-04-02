import RedirectImage from './components/redirect-image/RedirectImage'
import GalleryImg from '../../Images/gallery.png'
import ServicesImg from '../../Images/services.png'
import AboutImg from '../../Images/about.png'
import ContactImg from '../../Images/contact.png'
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