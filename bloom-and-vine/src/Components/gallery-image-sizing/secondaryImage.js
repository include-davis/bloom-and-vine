import './galleryImage.css'




export default function SecondaryImage (props) {
    return (
	    <div>
            <img id = "secondaryImage" src={props.img} />
        </div>
    );
}