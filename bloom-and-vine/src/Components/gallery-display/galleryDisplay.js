import { useState, useEffect } from 'react'
import GalleryCarousel from '../gallery-carousel/galleryCarousel'
import { Oval } from 'react-loader-spinner'
import axios from 'axios'
import './galleryDisplay.css'

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
                <button className={`gallery-category ${galleryIndex === 0 ? 'active-category' : 'inactive-category'}`} onClick={() => setGalleryIndex(0)}>
                    Weddings
                </button>
                <button className={`gallery-category ${galleryIndex === 1 ? 'active-category' : 'inactive-category'}`} onClick={() => setGalleryIndex(1)}>
                    Parties
                </button>
                <button className={`gallery-category ${galleryIndex === 2 ? 'active-category' : 'inactive-category'}`} onClick={() => setGalleryIndex(2)}>
                    Flowers
                </button>
                <button className={`gallery-category ${galleryIndex === 3 ? 'active-category' : 'inactive-category'}`} onClick={() => setGalleryIndex(3)}>
                    Films
                </button>
            </div>
			{gallery ?
                <GalleryCarousel data={gallery[galleryIndex]} /> :
                <div style={{paddingTop: 30}}>
                    <Oval
                        height={65}
                        width={65}
                        color="#A28598"
                        wrapperStyle={{display: "flex", "justify-content": "center"}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#E9DDDE"
                        strokeWidth={4}
                        strokeWidthSecondary={4}
                    />
                </div>
            }
        </div>
    )
}