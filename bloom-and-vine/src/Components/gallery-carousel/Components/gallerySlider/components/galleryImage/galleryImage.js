import './galleryImage.css'

export default function GalleryImage (props) {
    const { src, altText, imgClass, setIndex, index } = props;

    return (
        <img className={imgClass} src={src} alt={altText} onClick={() => setIndex(index)} />
    );
}