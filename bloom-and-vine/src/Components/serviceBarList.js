import "./serviceBar.css"

import ServiceBarElm from "./serviceBarElements";

import wedding from "../Pages/serviceImages/weddings.png"
import rentals from "../Pages/serviceImages/rentals.png"
import funerals from "../Pages/serviceImages/funerals.png"
import classes from "../Pages/serviceImages/classes.png"
import parties from "../Pages/serviceImages/parties.png"
import customOrder from "../Pages/serviceImages/customOrder.png"


const ServiceBarList = (props) =>{
    return(
        <div id = "servBar">
            <ServiceBarElm img={wedding} name ="Weddings" changeTo ={0} setIndex = {props.setIndex} />
            <ServiceBarElm img={rentals} name ="Rentals" changeTo ={1} setIndex = {props.setIndex}/>
            <ServiceBarElm img={funerals} name ="Funerals" changeTo ={2} setIndex = {props.setIndex}/>
            <ServiceBarElm img={classes} name ="Classes" changeTo ={3} setIndex = {props.setIndex}/>
            <ServiceBarElm img={parties} name ="Parties" changeTo ={4} setIndex = {props.setIndex}/>
            <ServiceBarElm img={customOrder} name ="Custom Orders" changeTo ={5} setIndex = {props.setIndex}/>
        </div>
        
    )
};

export default ServiceBarList;