import { useMemo } from 'react'
import GalleryInfo from './Components/galleryInfo/galleryInfo';
import GallerySlider from './Components/gallerySlider/gallerySlider';
import './galleryCarousel.css';

export default function GalleryCarousel(props) {
    const { data } = props;

    const upperCarousel = useMemo(() => {return (<GallerySlider data={data[0]} level={'upper'}/>)}, [data]);
    const lowerCarousel = useMemo(() => {return (<GallerySlider data={data[1]} level={'lower'}/>)}, [data]);

    return (
        <div className='gallery-carousel-container'>
            <div className='upper-gallery-carousel'>
                {data[0] && <GalleryInfo data={data[0]} level={'upper'} />}
                {data[0] && upperCarousel}
            </div>
            <div className='divider' />
            <div className='lower-gallery-carousel'>
                {data[1] && <GalleryInfo data={data[1]} level={'lower'} />}
                {data[1] && lowerCarousel}
            </div>
            <div className='divider' />
        </div>
    )
}
