import React from 'react'
import './InstagramShoutout.css'

export default function InstagramShoutout () {
    const InstagramHandler = (e) => {
        e.preventDefault()
        
        location.href = `https://www.instagram.com/bloomandvine/`
    }

    return (
        <div className='instagram-shoutout-container'>
            <p className='instagram-shoutout'>Check us out on Instagram!</p>
            <button className='instagram-tag' onClick={InstagramHandler}>@bloomandvine</button>
        </div>
    )
}