import { useState, useEffect, useMemo } from 'react'
import GallerySlider from '../gallery-carousel/Components/gallerySlider/gallerySlider'
import GalleryInfo from '../gallery-carousel/Components/galleryInfo/galleryInfo'
import weddingsImage from '../../Images/mobile_gallery/weddings.png'
import filmsImage from '../../Images/mobile_gallery/films.jpg'
import partiesImage from '../../Images/mobile_gallery/parties.jpg'
import flowersImage from '../../Images/mobile_gallery/flowers.jpg'


import mobileBackGalleryArrow from '../../Images/mobileBackGalleryArrow.png'
import axios from 'axios'
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
    if (displayPictures) {
        return (
            <div>
                <div id = "topContent">
                    <div onClick = {() => setDisplayPictures(false)}>
                        <img id = "backArrow" src={mobileBackGalleryArrow} alt="backArrow"/>
                    </div>
                    <h1 id = "topTitle">{galleryTitles[galleryIndex]}</h1>
                </div>

                {gallery && gallery[galleryIndex] && gallery[galleryIndex].map((content, index) => {
                    return (<div style={{paddingBottom: "4px"}} id={index}>
                        <div style={{marginTop: "3em"}}></div>
                        <GalleryInfo data={content} level={`${index}`} />
                        <GallerySlider data={content} level={`${index}`} />
                    </div>)
                })}
            </div>
        )
    }
    // returns the list of categories that the user can click on to learn more about
    else {
        return (
            <div>
                <h1 id = "GallMobHeader">Gallery</h1>
                <div id = "categoryList">
                    <GalleryCategorySelect src = {weddingsImage} text = "Weddings" index = {0}  />
                    <GalleryCategorySelect src = {partiesImage} text = "Parties" index = {1} />
                    <GalleryCategorySelect src = {flowersImage} text = "Flowers" index = {2} />
                    <GalleryCategorySelect src = {filmsImage} text = "Films" index = {3} />
                </div>
            </div>
        )
    }
}