import { Helmet } from "react-helmet";
import GalleryDisplay from "../Components/gallery-display/galleryDisplay";
import GalleryDisplayMobile from "../Components/gallery-display-mobile/galleryDisplayMobile";
import ContactDisplay from "../Components/contact-display/contactDisplay";
import "./Gallery.css";
import { useState, useEffect } from "react";

const Gallery = () => {
  // const width = window.innerWidth
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [])

  if (width <= 724) {
    return (
      <div className="Gallery">
        <Helmet>
          <title>Bloom & Vine | Gallery</title>
        </Helmet>

        <div className="gallery-display-mobile">
          <GalleryDisplayMobile />
        </div>
        <div className="contact-display-mobile">
          <ContactDisplay />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Gallery">
        <Helmet>
          <title>Bloom & Vine | Gallery</title>
        </Helmet>

        <div className="gallery-display">
          <GalleryDisplay />
        </div>

        <div className="contact-display">
          <ContactDisplay />
        </div>
      </div>
    );
  }
};

export default Gallery;
