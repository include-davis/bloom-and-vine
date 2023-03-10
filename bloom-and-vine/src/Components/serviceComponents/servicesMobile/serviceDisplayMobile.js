import "./serviceMobile.css";
import backArrow from "../../../Images/back2.png"

function ServiceDisplayMobile(props) {

    function returnToList(){
        props.setCurrentRender(0);
    }

    return (
        <div>
            <div id = "topContent">
                <div onClick = {returnToList}>
                    <img id ="backArrow" src={backArrow} />
                </div>
                <h1 id = "topTitle">{props.service}</h1>
            </div>

            
            <img className= "servImgM" src={props.image} />
            <p>{props.description}</p>
        </div>
        
    );
  }
  
  export default ServiceDisplayMobile;