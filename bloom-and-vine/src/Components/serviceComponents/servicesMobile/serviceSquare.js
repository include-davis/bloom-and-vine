import "./serviceMobile.css";

function ServiceSquare(props) {
  
    return (
        <div className = "listElmM">
                <img className= "servImgM" src={props.img}  />
                <h3 className = "servHeaderM">{props.name}</h3>
            </div>
    );
  }
  
  export default ServiceSquare;