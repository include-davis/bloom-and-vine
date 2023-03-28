import GalleryInfo from './Components/galleryInfo/galleryInfo';
import GallerySlider from './Components/gallerySlider/gallerySlider';
import './galleryCarousel.css';

// Use Homepage's IG Slider for reference

/*
    1) Left and Right Buttons
    2) Fetch data from gallery endpoints provided through props (galleryButtons)
    3) Pass data into GalleryImage component through props
    4) Figure out which elements to apply primary, secondary, or background class
*/

export default function GalleryCarousel(props) {
    const { data } = props;

    return (
        <div className='gallery-carousel-container'>
            <div className='upper-gallery-carousel'>
                {data[0] && <GalleryInfo data={data[0]} level={'upper'} />}
                {data[0] && <GallerySlider data={data[0]} level={'upper'} />}
            </div>
            <div className='divider' />
            <div className='lower-gallery-carousel'>
                {data[1] && <GalleryInfo data={data[1]} level={'lower'} />}
                {data[1] && <GallerySlider data={data[1]} level={'lower'} />}
            </div>
            <div className='divider' />
        </div>
    )
}
