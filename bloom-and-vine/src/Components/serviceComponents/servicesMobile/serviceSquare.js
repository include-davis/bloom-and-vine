import "./serviceMobile.css";

function ServiceSquare(props) {

    function changeRender(){
        props.setCurrentRender(props.setTo);
    }
  
    return (
        <div onClick = {changeRender} className = "listElmM">
            <img className= "servImgM" src={props.img} />
            <h3 className = "servHeaderM">
                {props.name}
            </h3>
        </div>
    );
  }
  
  export default ServiceSquare;