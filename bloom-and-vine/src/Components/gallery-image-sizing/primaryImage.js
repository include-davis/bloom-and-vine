import './galleryImage.css'




export default function PrimaryImage (props) {
    return (
	    <div>
            <img id = "primaryImage" src={props.img} />
        </div>
    );
}