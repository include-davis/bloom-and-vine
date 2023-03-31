import ServiceBarElm from "./serviceBarElements";
import servicesWeddingImg from "../../../Images/servicesWeddings.jpg"
import servicesRentalImg from "../../../Images/servicesRentals.jpg"
import servicesFuneralImg from "../../../Images/servicesFunerals.jpg"
import servicesClassesImg from "../../../Images/servicesClasses.jpg"
import servicesPartiesImg from "../../../Images/servicesParties.jpg"
import servicesCustomOrdersImg from "../../../Images/servicesCustomOrders.jpg"
import "./serviceBar.css"

const ServiceBarList = (props) =>{
    return (
        <div id = "servBar">
            <ServiceBarElm 
                img={servicesWeddingImg} 
                name ="Weddings" 
                changeTo = {0} 
                setIndex = {props.setIndex}
            />

            <ServiceBarElm 
                img={servicesRentalImg} 
                name ="Rentals" 
                changeTo = {1} 
                setIndex = {props.setIndex}
            />

            <ServiceBarElm 
                img={servicesFuneralImg} 
                name ="Funerals" 
                changeTo = {2} 
                setIndex = {props.setIndex}
            />

            <ServiceBarElm 
                img={servicesClassesImg} 
                name ="Classes" 
                changeTo = {3} 
                setIndex = {props.setIndex}
            />

            <ServiceBarElm 
                img={servicesPartiesImg} 
                name ="Parties" 
                changeTo = {4} 
                setIndex = {props.setIndex}
            />

            <ServiceBarElm 
                img={servicesCustomOrdersImg} 
                name ="Custom Orders"
                 changeTo = {5} 
                 setIndex = {props.setIndex}
            />

        </div>
        
    )
};

export default ServiceBarList;