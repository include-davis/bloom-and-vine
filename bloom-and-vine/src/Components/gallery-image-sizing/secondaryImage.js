import './galleryImage.css'


import Wedding from '../../Images/weddingPrimary.png'
import Wedding2 from '../../Images/weddingSecondary.png'


export default function SecondaryImage (props) {
    return (
	    <div>
            <img id = "secondaryImage" src={props.img} />
        </div>
    );
}