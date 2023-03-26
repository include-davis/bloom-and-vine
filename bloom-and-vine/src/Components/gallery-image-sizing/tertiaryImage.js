import './galleryImage.css'


import Wedding from '../../Images/weddingPrimary.png'
import Wedding2 from '../../Images/weddingSecondary.png'


export default function TertiaryImage (props) {
    return (
	    <div>
            <img id = "tertiaryImage" src={props.img} />
        </div>
    );
}