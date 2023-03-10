import "./serviceMobile.css";

function ServiceDisplayMobile(props) {

    function returnToList(){
        props.setCurrentRender(0);
    }

    return (
        <div>
            <div onClick = {returnToList}>
                arrow here woo
            </div>
            <h1>{props.ServiceDisplayMobile}</h1>
            <img className= "servImgM" src={props.image} />
            <p>{props.description}</p>
        </div>
        
    );
  }
  
  export default ServiceDisplayMobile;