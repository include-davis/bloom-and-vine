import "./serviceMobile.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import backArrow from "../../../Images/whiteBackArrow.png"

function ServiceDisplayMobile(props) {

    function returnToList(){
        props.setCurrentRender(0);
    }

    return (
        <div className = "mobileView">
            <div id = "topContent">
                <div onClick = {returnToList}>
                    <img id ="backArrow" src={backArrow} />
                </div>
                <h1 id = "topTitle">{props.service}</h1>
            </div>


            <img className= "servImgM" src={props.image} />

            <div id = "bottomContent">
                <p id = "mobileServDesc">{props.description}</p>

                <NavLink id = "contactButtonM"to="/Contact">
                    <div >Contact Us</div>
                </NavLink>
            </div>

        </div>
        
    );
  }
  
  export default ServiceDisplayMobile;