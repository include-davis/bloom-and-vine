import './galleryImage.css'


import Wedding from '../../Images/weddingPrimary.png'
import Wedding2 from '../../Images/weddingSecondary.png'



export default function PrimaryImage (props) {
    return (
	    <div>
            <img id = "primaryImage" src={props.img} />
        </div>
    );
}