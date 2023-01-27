import "./serviceBar.css"

function ServiceBarElm(props){
    return(
        <div id = "barElm">
            <img className= "servImg" src={props.img} alt={props.name} />
            <h3 className= "servHeader" >{props.name}</h3>
        </div>
    )
};

export default ServiceBarElm;