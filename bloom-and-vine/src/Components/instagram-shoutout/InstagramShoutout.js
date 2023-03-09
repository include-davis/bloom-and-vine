import React from 'react'
import './InstagramShoutout.css'

export default function InstagramShoutout () {
    const InstagramHandler = (e) => {
        e.preventDefault()
        
        // Insert url for Bloom & Vine IG page
        //location.href = 'https://instagram.com'
    }

    return (
        <div className='instagram-shoutout-container'>
            <p className='instagram-shoutout'>Check us out on Instagram!</p>
            <button className='instagram-tag' onClick={InstagramHandler}>@bloomandvine</button>
        </div>
    )
}