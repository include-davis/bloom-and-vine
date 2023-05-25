import { useState, useEffect, useCallback } from 'react';
import GalleryImage from './components/galleryImage/galleryImage';
import BackGalleryArrow from '../../../../Images/backGalleryArrow.png'
import ForwardGalleryArrow from '../../../../Images/forwardGalleryArrow.png'
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
    
let drag = 0;

export default function GallerySlider (props) {
    const [primaryImgIndex, setPrimaryImgIndex] = useState(0);
    const images = props.data.images;
    const level = props.level;
    const vidDisplay = props.data?.VideoUrl

    const galleryDots = getGalleryDots(images.length, setPrimaryImgIndex, level);
    const width = window.innerWidth;

    const onGalleryClickHandlerMemoized = useCallback((e, button) => {
        e.preventDefault();
        
        if (button === 'left') {
            primaryImgIndex - 1 >= 0 ? setPrimaryImgIndex(prevIndex => prevIndex - 1) : setPrimaryImgIndex(images.length - 1);
        }
        
        if (button === 'right') {
            primaryImgIndex + 1 < images.length ? setPrimaryImgIndex(prevIndex => prevIndex + 1) : setPrimaryImgIndex(0);
        }
    }, [primaryImgIndex]);

    const setCurrentDotMemoized = useCallback((index, images, level) => {
        const curIndex = index + 1 <= images.length ? index + 1 : 1;
        const inactiveDots = document.querySelectorAll(`.gallery-dot-${level}:not(:nth-child(${curIndex}))`)
        const curDot = document.querySelector(`.gallery-dot-${level}:nth-child(${curIndex})`)
        
        if (inactiveDots) {
            for (let i = 0; i < inactiveDots.length; i++) {
                inactiveDots[i].style.backgroundColor = "#D9D9D9";
            }
        }
        if (curDot) {
            curDot.style.backgroundColor = "#A28598";
        }
    }, [primaryImgIndex]);

    useEffect(() => {
        setPrimaryImgIndex(0);
    }, [props.data])

    useEffect(() => {
        setCurrentDotMemoized(primaryImgIndex, images, level);
    }, [primaryImgIndex])

    /*the mobile view displays only three gallery images as opposed to the usual 5, but it still works with 5 images at a time */
    if (vidDisplay) {
        return (
            <div className='video-container'>
                <div className='video-div'>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={props.data.VideoUrl} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        )
    }
    if (width <= 500){
        return (
            <div className='gallery-slider-container'>
                <div className='gallery-slider'>
                    <button className='gallery-event-button back-button' onClick={e => onGalleryClickHandlerMemoized(e, 'left')}>
                        <img className='button-image' src={BackGalleryArrow} />
                    </button>

                    <GalleryImage 
                            src={images[primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1].url} 
                            altText={images[primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1].altText} 
                            imgClass={'gallery-secondary-image-mobile'}
                            index={primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1}
                            setIndex={setPrimaryImgIndex} 
                        />

                    <GalleryImage 
                            src={images[primaryImgIndex].url} 
                            altText={images[primaryImgIndex].altText} 
                            imgClass={'gallery-primary-image-mobile'}
                            index={primaryImgIndex} 
                            setIndex={setPrimaryImgIndex} 
                        />
                    
                    <GalleryImage 
                            src={images[primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1].url} 
                            altText={images[primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1].altText} 
                            imgClass={'gallery-secondary-image-mobile'}
                            index={primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1}
                            setIndex={setPrimaryImgIndex} 
                        />

                    <button className='gallery-event-button forward-button' onClick={e => onGalleryClickHandlerMemoized(e, 'right')}>
                        <img className='button-image' src={ForwardGalleryArrow} />
                    </button>
                </div>
                <div className='current-gallery-image-dots'>
                    {galleryDots}
                </div>
            </div>
        )
    }
    /*below is the default return for the desktop view */
    else {
        return (
            <div className='gallery-slider-container'>
                <div className='gallery-slider'>
                    <button className='gallery-event-button back-button' onClick={e => onGalleryClickHandlerMemoized(e, 'left')}>
                        <img className='button-image' src={BackGalleryArrow} />
                    </button>
                    <GalleryImage 
                            src={images[primaryImgIndex - 2 < 0 ? images.length - 2 + primaryImgIndex: primaryImgIndex - 2].url} 
                            altText={images[primaryImgIndex - 2 < 0 ? images.length - 2 + primaryImgIndex: primaryImgIndex - 2].altText} 
                            imgClass={'gallery-tertiary-image'}
                            index={primaryImgIndex - 2 < 0 ? images.length - 2 + primaryImgIndex: primaryImgIndex - 2}
                            setIndex={setPrimaryImgIndex}
                    
                    />

                    <GalleryImage 
                            src={images[primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1].url} 
                            altText={images[primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1].altText} 
                            imgClass={'gallery-secondary-image'}
                            index={primaryImgIndex - 1 < 0 ? images.length - 1 + primaryImgIndex: primaryImgIndex - 1}
                            setIndex={setPrimaryImgIndex} 
                    />

                    <GalleryImage 
                            src={images[primaryImgIndex].url} 
                            altText={images[primaryImgIndex].altText} 
                            imgClass={'gallery-primary-image'}
                            index={primaryImgIndex}
                            setIndex={setPrimaryImgIndex}  
                    />
                    
                    <GalleryImage 
                            src={images[primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1].url} 
                            altText={images[primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1].altText} 
                            imgClass={'gallery-secondary-image'}
                            index={primaryImgIndex + 1 > images.length - 1 ? primaryImgIndex + 1 - images.length : primaryImgIndex + 1}
                            setIndex={setPrimaryImgIndex}  
                    />

                    <GalleryImage 
                            src={images[primaryImgIndex + 2 > images.length - 1 ? primaryImgIndex + 2 - images.length : primaryImgIndex + 2].url} 
                            altText={images[primaryImgIndex + 2 > images.length - 1 ? primaryImgIndex + 2 - images.length : primaryImgIndex + 2].altText} 
                            imgClass={'gallery-tertiary-image'}
                            index={primaryImgIndex + 2 > images.length - 1 ? primaryImgIndex + 2 - images.length : primaryImgIndex + 2} 
                            setIndex={setPrimaryImgIndex} 
                    />
                    <button className='gallery-event-button forward-button' onClick={e => onGalleryClickHandlerMemoized(e, 'right')}>
                        <img className='button-image' src={ForwardGalleryArrow} />
                    </button>
                </div>
                <div className='current-gallery-image-dots'>
                    {galleryDots}
                </div>
            </div>
        )
    }
}