import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import GalleryImg from './images/gallery.jpg'
import ServicesImg from './images/services.jpg'
import AboutImg from './images/about.jpg'
import ContactImg from './images/contact.jpg'

import Gallery from '../../Pages/Gallery'
import Services from '../../Pages/Services'
import About from '../../Pages/About'
import Contact from '../../Pages/Contact'

import './RedirectDisplay.css'

export default function RedirectImages() {
    return(
        <div className='image-container'>
            <div className='image-background' id='gallery'>
                <NavLink to='/gallery'>
                    <img className='image-redirect' src={GalleryImg} />
                </NavLink>
                <p className='image-text'>
                    Gallery
                </p>
            </div>
            <div className='image-background' id='services'>
                <NavLink to='/services'>
                    <img className='image-redirect' src={ServicesImg} />
                </NavLink>
                <p className='image-text'>
                    Services
                </p>
            </div>
            <div className='image-background' id='about'>
                <NavLink to='/about'>
                    <img className='image-redirect' src={AboutImg} />
                </NavLink>
                <p className='image-text'>
                    About
                </p>
            </div>
            <div className='image-background' id='contact'>
                <NavLink to="/contact">
                    <img className='image-redirect' src={ContactImg} />
                </NavLink>
                <p className='image-text'>
                    Contact
                </p>
            </div>
        </div>
    )
}