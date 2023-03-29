import { useState, useEffect } from 'react'
import axios from 'axios'

import wedding from '../../Images/weddingPrimary.png'
import backArrow from '../../Images/backArrowGallery.png'

import GallerySlider from '../gallery-carousel/Components/gallerySlider/gallerySlider'
import GalleryInfo from '../gallery-carousel/Components/galleryInfo/galleryInfo'

import './galleryDisplayMobile.css'


const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}

async function getData(category) {
    const QUERY = `/api/${category}`
    const resData = await axios.get(QUERY, options).then(res => {
        return (res.data.data ? res.data.data : []);
    });

    return resData
}

const galleryCategories = [
    'wedding-galleries', 
    'party-galleries', 
    'flower-galleries', 
    'film-galleries',
]

// used when displaying the right title in each gallery category display
const galleryTitles = [
    'Weddings', 
    'Parties', 
    'Flowers', 
    'Films'
]

export default function GalleryDisplayMobile () {
    const [gallery, setGallery] = useState(null)
    const [galleryIndex, setGalleryIndex] = useState(0);

    // false means to display the list of categories
    // true means to display the carousels associated with each category
    const [displayPictures, setDisplayPictures] = useState(false);
    
    // taken from desktop view
    useEffect(() => {
        Promise.all(galleryCategories.map(async (category) => {
            return (getData(category));
        })).then((res) => {
            setGallery(res)
        });
    }, [])
    

    // small component that displays image and text for each category that you can press one
    function GalleryCategorySelect (props) {
        return(
            <div className = "categoryBox" onClick={() => setGalleryIndex(props.index)}>
               <img className = "categoryImg" src={props.src} alt={props.text} onClick = {() => setDisplayPictures(true)}/>
               <h2 className = "categoryText" onClick = {() => setDisplayPictures(true)}>{props.text}</h2>
            </div>
        )
    }


    // returns the two carousels to be displayed when the user wants to view a set of images based on category
    if(displayPictures){
        return(
            <div>
                <div id = "topContent">
                    <div onClick = {() => setDisplayPictures(false)}>
                        <img id = "backArrow" src={backArrow} alt="backArrow"/>
                    </div>
                    <h1 id = "topTitle">{galleryTitles[galleryIndex]}</h1>
                </div>

                {gallery && <GalleryInfo data={gallery[galleryIndex][0]} level={'upper'} />}
                {gallery && <GallerySlider data={gallery[galleryIndex][0]} level={'upper'} />}

                {gallery && <GalleryInfo data={gallery[galleryIndex][0]} level={'upper'} />}
                {gallery && <GallerySlider data={gallery[galleryIndex][0]} level={'lower'} />}
            </div>
        )
    }
    // returns the list of categories that the user can click on to learn more about
    else{
        return(
            <div >
                <h1 id = "GallMobHeader">Gallery</h1>
                <div id = "categoryList">
                    <GalleryCategorySelect src = {wedding} text = "Weddings" index = {0}  />
                    <GalleryCategorySelect src = {wedding} text = "Parties" index = {1} />
                    <GalleryCategorySelect src = {wedding} text = "Flowers" index = {2} />
                    <GalleryCategorySelect src = {wedding} text = "Films" index = {3} />
                </div>
            </div>
        )
    }
}