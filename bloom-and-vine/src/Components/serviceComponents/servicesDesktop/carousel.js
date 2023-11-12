import { NavLink } from 'react-router-dom'
import servicesWeddingImg from "../../../Images/servicesWeddings.jpg"
import servicesRentalImg from "../../../Images/servicesRentals.jpg"
import servicesFuneralImg from "../../../Images/servicesFunerals.jpg"
import servicesClassesImg from "../../../Images/servicesClasses.jpg"
import servicesPartiesImg from "../../../Images/servicesParties.jpg"
import servicesCustomOrdersImg from "../../../Images/servicesCustomOrders.jpg"
import rightArrow from "../../../Images/blackRightArrow.svg"
import leftArrow from "../../../Images/blackLeftArrow.svg"
import "./carousel.css"

const ServicesCarousel = (props) =>{

    // index goes from 0 - 5 to represent 5 images
    function previousImage() {
        let newIndex = props.index - 1;

        if (newIndex < 0) {
            newIndex = 5;
        }

        props.setIndex(newIndex);
    }

    function nextImage() {
        let newIndex = props.index + 1;

        if (newIndex > 5) {
            newIndex = 0;
        }

        props.setIndex(newIndex);
    }	
	
	    let images = [
    	{
    		service: "Weddings",
        	src: servicesWeddingImg,
     	   	description: "We offer a wide range of services to best fit your budget and vision, from start to finish design to teaching you how to DIY your own wedding florals. Many of our flowers are sourced from local farms and hand chosen to make your floral pieces truly unique. You can count on us to make your wedding unforgettable. Let’s get in touch!"
   	 		},

    	{
        	service: "Rentals",
        	src: servicesRentalImg,
     	   	description: "Interested in renting decor pieces for a special event? Contact us for more information about our available containers, candles and decor pieces."
   	 		},

    	{
        	service: "Funerals",
        	src: servicesFuneralImg,
     	   	description: "Need assistance with floral arrangements for a funeral? Get in touch so we can help you find the best flowers to honor your passed loved one."
   	 		},

    	{
        	service: "Classes",
        	src: servicesClassesImg,
     	   	description: "Interested in learning how to DIY your own event or personal florals? Want to host a truly memorable party with floral design as the activity?  We offer a variety of classes from DIY centerpiece creation to European hand tied bouquet techniques. No matter your experience, we’ll help you every step of the way toward achieving your creative goals."
   	 		},

    	{
        	service: "Parties",
        	src: servicesPartiesImg,
     	   	description: "Looking to plan the party of your dreams? Want to host a flower arranging class at your place? Chat with us and we’ll gladly help you bring your plans to life."
   	 		},

    	{
        	service: "Custom Orders",
        	src: servicesCustomOrdersImg,
        	description: "Need something personalized for delivery? Have a novel request for your event? We are here for all the ideas you've got."
    	}
    ];

    return (
        <div>
            <div className="containerServ">
                <div className="description">
                    <img className="arrow" src={leftArrow} onClick= {previousImage} />

                    	<div id ="texts">
                        	<h1 id ="servTitle">{images[props.index].service}</h1>

                        		<div id = "scrollText">
						  			<p className ="servDesc">
										{images[props.index].description}
									</p>
                        		</div>
                        	<NavLink id = "contactButton"to="/Contact">
                        		<div >Contact Us</div>
                        	</NavLink>
                    	</div>
                    	<img id = "actualImg" src= {images[props.index].src} alt= {images[props.index].description} ></img>
                	<img className="arrow" src={rightArrow} onClick= {nextImage} />
                </div>
            </div>
        </div>
    )
};

export default ServicesCarousel;