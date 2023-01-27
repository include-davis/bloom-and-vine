import "./serviceBar.css"

import ServiceBarElm from "./serviceBarElements";
import wedding from "../Pages/serviceImages/weddings.png"

const ServiceBarList = () =>{
    return(
        <ServiceBarElm img={wedding} name ="Weddings"/>
    )
};

export default ServiceBarList;