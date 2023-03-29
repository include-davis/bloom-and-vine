import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './RedirectImage.css'

export default function RedirectImage(props) {
    const { redirect, img } = props;

    return (
        <div className='image-container'>
            <div className='image-background' id={redirect.toLowerCase()}>
                <p className='image-text'>
                    {redirect}
                </p>
            </div>
            <NavLink to={`/${redirect.toLowerCase()}`}>
                <img className='image-redirect' src={img} loading='eager'/>
            </NavLink>
        </div>
    )
}