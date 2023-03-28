import { useState, useEffect } from 'react';
import GalleryImage from '../galleryImage/galleryImage';
import BackArrow from '../../../../Images/back_arrow.png'
import ForwardArrow from '../../../../Images/forward_arrow.png'
import './gallerySlider.css'

function getGalleryDots(total, setCurImgDot, level) {
    let dot_display = [];
    for (let i = 0; i < total; i++) {
        dot_display.push(
            <div className={`gallery-dot-${level}`} key={i} onClick={() => setCurImgDot(i)}></div>
            );
        }
        
        return dot_display;
    }
    
function setCurrentDot(index, images, level) {
    const curIndex = index + 1 <= images.length ? index + 1 : 1;
    const inactiveDots = document.querySelectorAll(`.gallery-dot-${level}:not(:nth-child(${curIndex}))`)
    const curDot = document.querySelector(`.gallery-dot-${level}:nth-child(${curIndex})`)
    
    for (let i = 0; i < inactiveDots.length; i++) {
        inactiveDots[i].style.backgroundColor = "#D9D9D9";
    }
    
    curDot.style.backgroundColor = "#A28598";
}

export default function GallerySlider (props) {
    const [primaryImgIndex, setPrimaryImgIndex] = useState(0);
    const images = props.data.images;
    const level = props.level;
    
    const galleryDots = getGalleryDots(images.length, setPrimaryImgIndex, level);

    function onGalleryClickHandler(e, button) {
        e.preventDefault();

        if (button === 'left') {
            primaryImgIndex - 1 >= 0 ? setPrimaryImgIndex(prevIndex => prevIndex - 1) : setPrimaryImgIndex(images.length - 1);
        }
    
        if (button === 'right') {
            primaryImgIndex + 1 < images.length ? setPrimaryImgIndex(prevIndex => prevIndex + 1) : setPrimaryImgIndex(0);
        }
    }

    useEffect(() => {
        setCurrentDot(primaryImgIndex, images, level);
    }, [primaryImgIndex])
    
    
    return (
        <div className='gallery-slider-container'>
            <div className='gallery-slider'>
                <button className='gallery-event-button back-button' onClick={e => onGalleryClickHandler(e, 'left')}>
                    <img className='button-image' src={BackArrow} />
                </button>
                <GalleryImage 
                        src={images[primaryImgIndex - 2 < 0 ? images.length - 2 + primaryImgIndex: primaryImgIndex - 2].url} 
                        altText={images[primaryImgIndex - 2 < 0 ? images.length - 2 + primaryImgIndex: primaryImgIndex - 2].altText} 
                        imgClass={'gallery-tertiary-image'} 
                    />

                <GalleryImage 
                        src={images[primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1].url} 
                        altText={images[primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1].altText} 
                        imgClass={'gallery-secondary-image'} 
                    />

                <GalleryImage 
                        src={images[primaryImgIndex].url} 
                        altText={images[primaryImgIndex].altText} 
                        imgClass={'gallery-primary-image'} 
                    />
                
                <GalleryImage 
                        src={images[primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1].url} 
                        altText={images[primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1].altText} 
                        imgClass={'gallery-secondary-image'} 
                    />

                <GalleryImage 
                        src={images[primaryImgIndex + 2 > images.length - 1 ? primaryImgIndex + 2 - images.length : primaryImgIndex + 2].url} 
                        altText={images[primaryImgIndex + 2 > images.length - 1 ? primaryImgIndex + 2 - images.length : primaryImgIndex + 2].altText} 
                        imgClass={'gallery-tertiary-image'} 
                    />
                <button className='gallery-event-button forward-button' onClick={e => onGalleryClickHandler(e, 'right')}>
                    <img className='button-image' src={ForwardArrow} />
                </button>
            </div>
            <div className='current-gallery-image-dots'>
                {galleryDots}
            </div>
        </div>
    )
}