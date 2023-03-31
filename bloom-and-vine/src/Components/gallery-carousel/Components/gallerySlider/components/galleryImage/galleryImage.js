import './galleryImage.css'

// Refer to Homepage IG Display implementation if you need help

/* 
    1) Takes in data from a gallery as a prop
    2) Structure the image properly 
        - Create primary, secondary, & background classes
        - Switch classes based on position it is in relative to center img
*/

export default function GalleryImage (props) {
    const { src, altText, imgClass, setIndex, index } = props;

    return (
        <img className={imgClass} src={src} alt={altText} onClick={() => setIndex(index)} />
    );
}