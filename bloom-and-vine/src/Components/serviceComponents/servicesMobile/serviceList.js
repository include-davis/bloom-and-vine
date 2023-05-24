import ServiceSquare from "./serviceSquare";
import servicesWeddingImg from "../../../Images/servicesWeddings.jpg"
import servicesRentalImg from "../../../Images/servicesRentals.jpg"
import servicesFuneralImg from "../../../Images/servicesFunerals.jpg"
import servicesClassesImg from "../../../Images/servicesClasses.jpg"
import servicesPartiesImg from "../../../Images/servicesParties.jpg"
import servicesCustomOrdersImg from "../../../Images/servicesCustomOrders.jpg"
import "./serviceMobile.css";

function ServiceList(props) {
  
    return (
        <div className ="mobileView">
            <h1 id="mobileHeader">Services</h1>
            <ServiceSquare 
                setTo = {1} 
                setCurrentRender = {props.setCurrentRender} 
                img = {servicesWeddingImg} 
                name="Weddings" 
            />

            <ServiceSquare 
                setTo = {2} 
                setCurrentRender = {props.setCurrentRender} 
                img = {servicesRentalImg} 
                name="Rentals" 
            />

            <ServiceSquare 
                setTo = {3} 
                setCurrentRender = {props.setCurrentRender} 
                img = {servicesFuneralImg} 
                name="Funerals" 
            />

            <ServiceSquare 
                setTo = {4} 
                setCurrentRender = {props.setCurrentRender} 
                img = {servicesClassesImg} 
                name="Classes" 
            />

            <ServiceSquare 
                setTo = {5} 
                setCurrentRender = {props.setCurrentRender} 
                img = {servicesPartiesImg} 
                name="Parties" 
            />

            <ServiceSquare 
                setTo = {6} 
                setCurrentRender = {props.setCurrentRender} 
                img = {servicesCustomOrdersImg} 
                name="Custom Order"
            />
            <p id = "bottomText">Interested in booking for an event?</p>
            <div id = "bottomButtons">
                <a id = "contactButtonM" href="/Contact">
                    <div >Contact Us</div>
                </a>
            </div>
        </div>
    );
  }
  
  export default ServiceList;