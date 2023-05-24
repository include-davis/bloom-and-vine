import { NavLink } from 'react-router-dom'
import './RedirectImage.css'

export default function RedirectImage(props) {
    const { redirect, img } = props;

    return (
        <div className='image-container'>
            <div className='image-background' id={redirect}>
                <p className='image-text'>
                    {redirect}
                </p>
            </div>
            <NavLink to={`/${redirect}`}>
                <img className='image-redirect' src={img} loading='eager'/>
            </NavLink>
        </div>
    )
}