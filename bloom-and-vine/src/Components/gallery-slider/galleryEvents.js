import { useState, useEffect } from 'react';
import axios from 'axios';

import GalleryText from './Components/galleryText/galleryText';
import GalleryImage from './Components/galleryImage/galleryImage';
import './galleryEvents.css'

// Use Homepage's IG Slider for reference

/*
    1) Left and Right Buttons
    2) Fetch data from gallery endpoints provided through props (galleryButtons)
    3) Pass data into GalleryImage component through props
    4) Figure out which elements to apply primary, secondary, or background class
*/


function GalleryEvent (props) {
    const { data } = props;

    const displayComponents = data.images.map(img => {
        // Note: Utilize entry 0 of images for any url/text
        const images = <GalleryImage src={img.url} altText={img.altText} />
        return ({
            "displayImages": images,
        });
    });

    const galleryDisplay = displayComponents.map((component, index) => {return (
        <div className='gallery-content' key={index}>
            <div className='gallery-image-container'>
                {component.displayImages}
            </div>
        </div>
    )});

    return (
        <div className='gallery-slider-container'>
            <div className='gallery-back-button'>

            </div>
            <div className='gallery-text-container'>
                <GalleryText title={data.title} date={data.date} desc={data.description} />
            </div>
            {galleryDisplay}
            <div className='gallery-forward-button'>

            </div>
        </div>
    );
}

export default function GalleryEvents(props) {
    const { data } = props;

    return (
        <div className='gallery-events-container'>
            {data[0] && <GalleryEvent data={data[0]} />}
            {data[1] && <GalleryEvent data={data[1]} />}
        </div>
    )
}
