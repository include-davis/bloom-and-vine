import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import "./carousel.css"
import wedding from "../../../Images/weddings.png"
import rentals from "../../../Images/rentals.png"
import funerals from "../../../Images/funerals.png"
import classes from "../../../Images/classes.png"
import parties from "../../../Images/parties.png"
import customOrder from "../../../Images/customOrder.png"

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
          service: "Wedding Services",
          src: wedding,
          description: "Need a hand on your special day? We offer a variety of wedding services ranging from making beautiful bouquets to DIYing wedding centerpieces! Our flowers are sourced from local farms and are hand chosen to cater to you and your vision. You can count on us to make your wedding unforgettable. Let’s get in touch!"
        },
        {
          service: "Rentals",
          src: rentals,
          description: "2nd img words words words words words words words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Funerals",
          src: funerals,
          description: "3rd img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Classes",
          src: classes,
          description: "4th img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Parties",
          src: parties,
          description: "5th img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Custom Orders",
          src: customOrder,
          description: "6th img words words words words words words words words words words words words words words words words words words words words words words "
        }
      ];

    return(
        <div>
            <div className="containerServ">
                <div className="description">
                    <div className="arrow" onClick= {previousImage} >&lt;</div>

                    <div id ="texts">
                          <h1 id ="servTitle">{images[props.index].service}</h1>

                          <div id = "scrollText">
                            <p className ="servDesc">{images[props.index].description}</p>
                            <p className ="servDesc"> <em> Recommended Vendors:</em> <u>Blossom Farm Vintage Rentals</u> </p>
                          </div>
                        <NavLink id = "contactButton"to="/Contact">
                          <div >Contact Us</div>
                        </NavLink>
                        
                    </div>

                        <img id = "actualImg" src= {images[props.index].src} alt= {images[props.index].description} ></img>
                    <div className="arrow" onClick= {nextImage} >&gt;</div>
                </div>
                
            </div>
        </div>
        
    )
};

export default ServicesCarousel;