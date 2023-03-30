import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import "./carousel.css"
import wedding from "../../../Images/weddings.png"
import rentals from "../../../Images/rentals.png"
import funerals from "../../../Images/funerals.png"
import classes from "../../../Images/classes.png"
import parties from "../../../Images/parties.png"
import customOrder from "../../../Images/customOrder.png"
import rightArrow from "../../../Images/blackRightArrow.svg"
import leftArrow from "../../../Images/blackLeftArrow.svg"

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
    
    var images = [
      {
        service: "Weddings",
        src: wedding,
        description: "Need a hand on your special day? We offer a variety of wedding services ranging from making beautiful bouquets to DIYing wedding centerpieces! Our flowers are sourced from local farms and are hand chosen to cater to you and your vision. You can count on us to make your wedding unforgettable. Let’s get in touch!"
      },
      {
        service: "Rentals",
        src: rentals,
        description: "Interested in renting homemade decor pieces for a special event? Contact us for more information about our available rentals and we’ll reach back to you shortly! Let us help you find the piece that will make your event shine even brighter!"
      },
      {
        service: "Funerals",
        src: funerals,
        description: "Need assistance with floral arrangements for a funeral? Get in touch so we can help you find the best flowers to honor your passed loved one."
      },
      {
        service: "Classes",
        src: classes,
        description: " Interested in learning how to DIY your own decor pieces? We offer a variety of classes that range from DIYing centerpieces to arranging flowers like a professional! No matter your experience, we’ll help you every step of the way toward achieving your creative goals. "
      },
      {
        service: "Parties",
        src: parties,
        description: "Looking to plan the party of your dreams? Chat with us and we’ll gladly help you bring your party plans to life! Whether you need help with organizing a party you already had in mind or with planning a party from step one, we’ll make sure you are 100% satisfied! "
      },
      {
        service: "Custom Orders",
        src: customOrder,
        description: "Need help with planning something that goes beyond our other services? We are always open to making custom orders to help you bring your dreams to reality! Contact us and let us know about your vision so we can best help you achieve it! "
      }
    ];

    return(
        <div>
            <div className="containerServ">
                <div className="description">
                    <img className="arrow" src={leftArrow} onClick= {previousImage} />

                    <div id ="texts">
                          <h1 id ="servTitle">{images[props.index].service}</h1>

                          <div id = "scrollText">
                            <p className ="servDesc">{images[props.index].description}</p>
                            {/*<p className ="servDesc"> <em> Recommended Vendors:</em> <u>Blossom Farm Vintage Rentals</u> </p> */}
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