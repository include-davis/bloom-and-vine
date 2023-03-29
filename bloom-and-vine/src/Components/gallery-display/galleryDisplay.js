import { useState, useEffect } from 'react'
import axios from 'axios'

import GalleryCarousel from '../gallery-carousel/galleryCarousel'
import './galleryDisplay.css'

/*
    1) Import Gallery Slider
    2) Create Gallery Buttons (flexbox: row; align-items: center; Add margins)
    3) Have onClick event handler to render different gallery display by passing gallery type through props
*/
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

export default function GalleryDisplay () {
    const [gallery, setGallery] = useState(null)
    const [galleryIndex, setGalleryIndex] = useState(0);
    
    useEffect(() => {
        Promise.all(galleryCategories.map(async (category) => {
            return (getData(category));
        })).then((res) => {
            setGallery(res)
        });
    }, [])

    return (
	    <div className='gallery-display-container'>
            <div className='gallery-category-container'>
                <button className={`gallery-category ${galleryIndex === 0 ? 'active' : 'inactive'}`} onClick={() => setGalleryIndex(0)}>
                    Weddings
                </button>
                <button className={`gallery-category ${galleryIndex === 1 ? 'active' : 'inactive'}`} onClick={() => setGalleryIndex(1)}>
                    Parties
                </button>
                <button className={`gallery-category ${galleryIndex === 2 ? 'active' : 'inactive'}`} onClick={() => setGalleryIndex(2)}>
                    Flowers
                </button>
                <button className={`gallery-category ${galleryIndex === 3 ? 'active' : 'inactive'}`} onClick={() => setGalleryIndex(3)}>
                    Films
                </button>
            </div>
			{gallery && <GalleryCarousel data={gallery[galleryIndex]} />}
        </div>
    )
}