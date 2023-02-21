import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './RedirectImage.css'

export default function RedirectImage(props) {
    const { redirect, img } = props;

    return (
        <div className='image-background' id={redirect.toLowerCase()}>
            <NavLink to={`/${redirect.toLowerCase()}`}>
                <img className='image-redirect' src={img} loading='eager'/>
            </NavLink>
            <p className='image-text'>
                {redirect}
            </p>
        </div>
    )
}