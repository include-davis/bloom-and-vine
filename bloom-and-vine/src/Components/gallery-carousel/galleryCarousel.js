import { useMemo } from 'react'
import GalleryInfo from './Components/galleryInfo/galleryInfo';
import GallerySlider from './Components/gallerySlider/gallerySlider';
import './galleryCarousel.css';

export default function GalleryCarousel(props) {
    const { data } = props;

    return (
        <div className='gallery-carousel-container'>


            {data && data.map((content, index) => {
                    return (<div className='upper-gallery-carousel' id={index}>
                        <GalleryInfo data={content} level={`${index}`} />
                        <GallerySlider data={content} level={`${index}`} />
                        <div className='divider' />
                    </div>)
            })}
        </div>
    )
}
