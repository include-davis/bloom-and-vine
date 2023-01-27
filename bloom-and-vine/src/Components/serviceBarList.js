import "./serviceBar.css"

import ServiceBarElm from "./serviceBarElements";

import wedding from "../Pages/serviceImages/weddings.png"
import rentals from "../Pages/serviceImages/rentals.png"
import funerals from "../Pages/serviceImages/funerals.png"
import classes from "../Pages/serviceImages/classes.png"
import parties from "../Pages/serviceImages/parties.png"
import customOrder from "../Pages/serviceImages/customOrder.png"

const ServiceBarList = () =>{
    return(
        <div id = "servBar">
            <ServiceBarElm img={wedding} name ="Weddings"/>
            <ServiceBarElm img={rentals} name ="Rentals"/>
            <ServiceBarElm img={funerals} name ="Funerals"/>
            <ServiceBarElm img={classes} name ="Classes"/>
            <ServiceBarElm img={parties} name ="Parties"/>
            <ServiceBarElm img={customOrder} name ="Custom Orders"/>
        </div>
        
    )
};

export default ServiceBarList;