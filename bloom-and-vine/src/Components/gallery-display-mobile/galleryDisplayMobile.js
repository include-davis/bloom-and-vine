import { useState, useEffect } from 'react'
import axios from 'axios'



import wedding from '../../Images/weddingPrimary.png'
import GallerySlider from '../gallery-carousel/Components/gallerySlider/gallerySlider'

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

function GalleryCategorySelect (props) {
    return(
        <div className = "categoryBox">
           <img className = "categoryImg" src={props.src} alt={props.text} />
           <h2 className = "categoryText"  >{props.text}</h2>
        </div>
    )
}


export default function GalleryDisplayMobile () {
    const [gallery, setGallery] = useState(null)
    const [galleryIndex, setGalleryIndex] = useState(0);
    
    useEffect(() => {
        Promise.all(galleryCategories.map(async (category) => {
            return (getData(category));
        })).then((res) => {
            setGallery(res)
        });
    }, [])

    return(
        <div >
            
            <h1 id = "GallMobHeader" >Gallery</h1>
            <div id = "categoryList">
                <GalleryCategorySelect src = {wedding} text = "Weddings" onClick={() => setGalleryIndex(0)} />
                <GalleryCategorySelect src = {wedding} text = "Parties" onClick={() => setGalleryIndex(1)} />
                <GalleryCategorySelect src = {wedding} text = "Flowers" onClick={() => setGalleryIndex(2)} />
                <GalleryCategorySelect src = {wedding} text = "Films" onClick={() => setGalleryIndex(3)} />
            </div>
            {gallery && <GallerySlider data={gallery[galleryIndex][0]} level={'upper'} />}
            {gallery && <GallerySlider data={gallery[galleryIndex][1]} level={'lower'} />}
            
        </div>


    )

}