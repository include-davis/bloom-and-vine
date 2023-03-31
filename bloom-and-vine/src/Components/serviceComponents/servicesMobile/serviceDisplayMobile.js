import { NavLink } from 'react-router-dom'
import mobileBackArrow from "../../../Images/whiteBackArrow.png"
import "./serviceMobile.css";


function ServiceDisplayMobile(props) {

    function returnToList(){
        props.setCurrentRender(0);
    }

    return (
        <div className = "mobileView">
            <div id = "topContent">
                <div onClick = {returnToList}>
                    <img id ="backArrow" src={mobileBackArrow} />
                </div>
                <h1 id = "topTitle">
                    {props.service}
                </h1>
            </div>

            <img className= "servImgM" src={props.image} />

            <div id = "bottomContent">
                <p id = "mobileServDesc">
                    {props.description}
                </p>
                <NavLink id = "contactButtonM"to="/Contact">
                    <div>Contact Us</div>
                </NavLink>
            </div>

        </div>
    );
  }
  
  export default ServiceDisplayMobile;