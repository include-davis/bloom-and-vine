import './galleryImage.css'


export default function TertiaryImage (props) {
    return (
	    <div>
            <img id = "tertiaryImage" src={props.img} />
        </div>
    );
}